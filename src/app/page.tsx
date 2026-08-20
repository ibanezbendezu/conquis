// src/app/page.tsx
"use client";

import { useState, useMemo } from "react";
import { Search, Sun, Moon, LayoutGrid, List as ListIcon, Filter, ArrowUpDown } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { honorData, categories, Honor } from "../data/honors";
import HonorCard from "../components/HonorCard";
import HonorModal from "../components/HonorModal";

type SortOption = "name-asc" | "name-desc" | "category-asc";
type ViewMode = "grid" | "list";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [selectedHonor, setSelectedHonor] = useState<Honor | null>(null);
  const [isDark, setIsDark] = useState(true);
  const [sortOrder, setSortOrder] = useState<SortOption>("name-asc");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");

  const filteredHonors = useMemo(() => {
    const result = honorData.filter((honor) => {
      const matchesCategory = selectedCategory === "Todas" || honor.category === selectedCategory;
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
          honor.name.toLowerCase().includes(searchLower) ||
          honor.requirements.some((req) => req.description.toLowerCase().includes(searchLower));

      return matchesCategory && matchesSearch;
    });

    result.sort((a, b) => {
      if (sortOrder === "name-asc") return a.name.localeCompare(b.name);
      if (sortOrder === "name-desc") return b.name.localeCompare(a.name);
      if (sortOrder === "category-asc") {
        const catCompare = a.category.localeCompare(b.category);
        return catCompare !== 0 ? catCompare : a.name.localeCompare(b.name);
      }
      return 0;
    });

    return result;
  }, [searchQuery, selectedCategory, sortOrder]);

  return (
      <main className={`min-h-screen p-6 md:p-12 font-sans transition-colors duration-200 ${isDark ? "bg-neutral-950 text-neutral-100" : "bg-neutral-50 text-neutral-900"}`}>
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <header>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
                Especialidades <span className="text-teal-700 dark:text-teal-400">Conquistadores</span>
              </h1>
            </header>

            <button
                onClick={() => setIsDark(!isDark)}
                className={`p-2.5 rounded-lg border transition-colors ${
                    isDark ? "bg-neutral-900 border-neutral-800 text-yellow-400 hover:bg-neutral-800" : "bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-100"
                }`}
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>

          {/* Toolbar: Search, Filters, Sort, View */}
          <section className={`mb-8 p-4 rounded-xl border ${isDark ? "bg-neutral-900/50 border-neutral-800" : "bg-white border-neutral-200 shadow-sm"}`}>
            <div className="flex flex-col lg:flex-row gap-4">

              {/* Search */}
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Search className={`h-4 w-4 ${isDark ? "text-neutral-500" : "text-neutral-400"}`} />
                </div>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={`block w-full pl-10 pr-4 py-2 border rounded-lg text-sm leading-5 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all ${
                        isDark ? "bg-neutral-900 border-neutral-700 text-neutral-100" : "bg-neutral-50 border-neutral-200 text-neutral-900"
                    }`}
                    placeholder="Buscar por nombre o requisito..."
                />
              </div>

              {/* Controls (Category, Sort, View) */}
              <div className="flex flex-wrap items-center gap-3">

                {/* Category Filter */}
                <div className="relative flex items-center">
                  <Filter className={`absolute left-3 h-4 w-4 ${isDark ? "text-neutral-500" : "text-neutral-400"}`} />
                  <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className={`pl-9 pr-8 py-2 appearance-none border rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-teal-600 cursor-pointer ${
                          isDark ? "bg-neutral-900 border-neutral-700 text-neutral-200" : "bg-neutral-50 border-neutral-200 text-neutral-700"
                      }`}
                  >
                    {categories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                {/* Sort Order */}
                <div className="relative flex items-center">
                  <ArrowUpDown className={`absolute left-3 h-4 w-4 ${isDark ? "text-neutral-500" : "text-neutral-400"}`} />
                  <select
                      value={sortOrder}
                      onChange={(e) => setSortOrder(e.target.value as SortOption)}
                      className={`pl-9 pr-8 py-2 appearance-none border rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-teal-600 cursor-pointer ${
                          isDark ? "bg-neutral-900 border-neutral-700 text-neutral-200" : "bg-neutral-50 border-neutral-200 text-neutral-700"
                      }`}
                  >
                    <option value="name-asc">Nombre (A-Z)</option>
                    <option value="name-desc">Nombre (Z-A)</option>
                    <option value="category-asc">Por Categoría</option>
                  </select>
                </div>

                {/* View Toggle */}
                <div className={`flex items-center border rounded-lg p-0.5 ml-auto lg:ml-0 ${isDark ? "border-neutral-700 bg-neutral-900" : "border-neutral-200 bg-neutral-50"}`}>
                  <button
                      onClick={() => setViewMode("grid")}
                      className={`p-1.5 rounded-md transition-colors ${viewMode === "grid" ? (isDark ? "bg-neutral-800 text-teal-400" : "bg-white text-teal-700 shadow-sm") : (isDark ? "text-neutral-500 hover:text-neutral-300" : "text-neutral-400 hover:text-neutral-600")}`}
                  >
                    <LayoutGrid className="h-4 w-4" />
                  </button>
                  <button
                      onClick={() => setViewMode("list")}
                      className={`p-1.5 rounded-md transition-colors ${viewMode === "list" ? (isDark ? "bg-neutral-800 text-teal-400" : "bg-white text-teal-700 shadow-sm") : (isDark ? "text-neutral-500 hover:text-neutral-300" : "text-neutral-400 hover:text-neutral-600")}`}
                  >
                    <ListIcon className="h-4 w-4" />
                  </button>
                </div>

              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-neutral-200 dark:border-neutral-800 flex justify-end">
             <span className={`text-xs font-medium ${isDark ? "text-neutral-500" : "text-neutral-400"}`}>
              Mostrando {filteredHonors.length} especialidad{filteredHonors.length !== 1 ? 'es' : ''}
            </span>
            </div>
          </section>

          {/* Honors Container */}
          <section className={
            viewMode === "grid"
                ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                : "flex flex-col gap-3"
          }>
            {/* Mapeo de tarjetas (igual que antes) */}
            {filteredHonors.length > 0 ? (
                filteredHonors.map((honor) => (
                    <HonorCard
                        key={honor.id}
                        honor={honor}
                        isDark={isDark}
                        viewMode={viewMode}
                        onClick={(clickedHonor) => setSelectedHonor(clickedHonor)}
                    />
                ))
            ) : (
                <div className={`col-span-full py-12 text-center rounded-lg border border-dashed ${
                    isDark ? "border-neutral-800 bg-neutral-900/50 text-neutral-400" : "border-neutral-300 bg-white text-neutral-500"
                }`}>
                  <p className="text-sm font-medium">No se encontraron especialidades.</p>
                </div>
            )}
          </section>

        </div>

        <AnimatePresence>
          {selectedHonor && (
              <HonorModal
                  honor={selectedHonor}
                  isDark={isDark}
                  onClose={() => setSelectedHonor(null)}
              />
          )}
        </AnimatePresence>
      </main>
  );
}