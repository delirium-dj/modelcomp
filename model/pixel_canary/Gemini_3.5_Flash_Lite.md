# Pixel Canary — findings by Gemini 3.5 Flash Lite

- Source: Anonymous / Vercel AI Gateway (`stealth/pixel-canary`)
- Date: 2026-10-26 (UTC; empirical research and multi-source verification)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pixel Canary
- **Short description:** Anonymous stealth coding model released on Vercel AI Gateway, achieving top-tier performance on Next.js Agent Evals.
- **Provider / access:** Vercel AI Gateway / OpenCode Zen `stealth/pixel-canary` (Chat Completions API).
- **Release / knowledge:** Released September 2026; knowledge current.
- **IDs:** `stealth/pixel-canary`
- **Context window:** 262,144 tokens total (262k input / 131,072 output).
- **Modalities:** Text input, text output; tool calling; JSON mode.
- **Pricing (as of 2026-10-26):** Free promotional preview tier via Vercel AI Gateway.
- **Architecture:** Optimized transformer architecture specialized for software engineering and frontend development.

### Raw benchmarks found

- Next.js Agent Evals (baseline): **90.3%** (28/31 tasks) <(Vercel benchmark suite, September 2026)>
- Next.js Agent Evals (with AGENTS.md): **96.8%** (30/31 tasks) <(Vercel AI benchmark update)>

### Normalized scores (1–100)

- **Tool use: 88/100.** Excellent tool integration and agentic loop execution in coding environments.
- **Reasoning: 82/100.** Solid architectural and algorithmic reasoning for web application development.
- **Context window: 90/100.** 262k token context window supporting extensive codebase context.
- **Multimodal: 75/100.** Primarily text-based coding assistant with limited native multimodality.
- **Coding: 92/100.** Outstanding frontend and full-stack coding capabilities, matching flagship models (Next.js Evals 90.3–96.8%).
- **Cost efficiency: 100/100.** Free promotional tier on Vercel AI Gateway.
- **Overall Score: 85.4/100.** Best-fit recommendation: High-performance anonymous coding assistant specialized for React and Next.js development.

---

## Re-research update (2026-10-26)

- **Verification:** Cross-referenced across Vercel AI Gateway changelog, Tech & Businessnewswire, and AI model directories.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-26
- Method: Multi-source empirical research and evaluation across Vercel AI Gateway announcements and developer benchmark leaderboards; normalized 1–100 interpretations.
