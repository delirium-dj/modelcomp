## MiniMax M2.5

- **Name:** MiniMax-M2.5
- **Short description:** MiniMax's latest frontier model (229B params), SOTA in coding, agentic tool use/search, and office work. Trained with massive RL scaling (Forge framework, CISPO algorithm) for efficiency and cost-effectiveness. Modified-MIT license.
- **Provider / access:** MiniMax (open-weight, Modified-MIT license) — available on Hugging Face, ModelScope, GitHub, via MiniMax API platform (M2.5 and M2.5-Lightning variants), and local deployment (SGLang, vLLM, Transformers, KTransformers).
- **Release / knowledge:** Released October 2026; knowledge cutoff recent 2026.
- **IDs:** `MiniMaxAI/MiniMax-M2.5` (HF), `MiniMaxAI/MiniMax-M2.5` (ModelScope), MiniMax API (M2.5 at 50 tok/s, M2.5-Lightning at 100 tok/s).
- **Context window:** Not explicitly stated in model card; benchmarks run at 1M context (SWE-Bench, Terminal-Bench, BrowseComp with context management). Assumed ≥1M native.
- **Modalities:** Text in / text out; handles Word, Excel, PPT via tool use (office skills).
- **Pricing:** Open-weight (free to self-host); API: M2.5-Lightning $0.30/M in, $2.40/M out (100 tok/s); M2.5 half price (50 tok/s). Caching supported. Cost per task ~10% of Opus 4.6.

### Raw benchmarks found
- **SWE-Bench Verified:** 80.2% (official, internal infra, Claude Code, avg 4 runs); 75.8% (HF eval); 79.7% (Droid scaffolding); 76.1% (OpenCode scaffolding) — all > Opus 4.6 (78.9% Droid, 75.9% OpenCode).
- **SWE-Bench Pro:** 55.4%.
- **SWE-Bench Multilingual:** Strong (not explicitly scored but noted as pronounced improvement).
- **Multi-SWE-Bench:** 51.3%.
- **Terminal Bench 2:** 22.8 min avg runtime (37% faster than M2.1's 31.3 min), on par with Opus 4.6 (22.9 min); 3.52M tokens/task vs M2.1 3.72M.
- **VIBE-Pro:** On par with Opus 4.5 (internal benchmark, Claude Code, avg 3 runs).
- **BrowseComp (with context mgmt):** 76.3% (industry-leading).
- **Wide Search:** Industry-leading (same agent framework as WebExplorer).
- **RISE (Realistic Interactive Search Evaluation):** Expert-level search performance (internal benchmark).
- **GDPval-MM (Cowork Agent):** 59.0% avg win rate vs mainstream models (pairwise LLM-as-judge on deliverable quality + trajectory professionalism).
- **MEWC (Microsoft Excel World Championship):** 179 problems, cell-level scoring.
- **Finance Modeling:** Expert-designed rubrics, avg over 3 runs.
- **GPQA Diamond:** 85.2%.
- **AIME 2025:** 86.3%.
- **HLE w/o tools:** 19.4%.
- **SciCode:** 44.4%.
- **IFBench:** 70.0%.
- **AA-LCR:** 69.5%.
- **MMLU-Pro:** 80.1%.
- **Speed:** M2.5-Lightning 100 tok/s steady; M2.5 50 tok/s.
- **Cost per task:** SWE-Bench Verified cost ~10% of Opus 4.6; $1/hour continuous at 100 tok/s (Lightning), $0.30/hour at 50 tok/s.

### Normalized scores (1–100)
- **Tool use: 85/100.** BrowseComp 76.3% (frontier), Wide Search leading, RISE expert-level, GDPval-MM 59% win rate, Toolathon not directly reported but M2.7 was 46%. Strong search and office tool use.
- **Reasoning: 82/100.** GPQA Diamond 85.2% (frontier 90%+), AIME 86.3% (frontier 95%+), HLE w/o tools 19.4% (low, but w/ tools not reported), SciCode 44.4% (frontier 55%+), AA-LCR 69.5% (frontier 95%+), MMLU-Pro 80.1% (strong). Strong math/science; HLE w/o tools weak but tool-augmented likely higher.
- **Context window: 100/100.** Benchmarks run at 1M context (SWE-Bench, Terminal-Bench, BrowseComp with context management); demonstrated long-horizon task completion at scale.
- **Multimodal: 20/100.** Text-only for direct I/O, but handles office documents (Word/Excel/PPT) via tool use and Office Skills — effectively multimodal in practice. Scored slightly above pure text-only (15) for document processing capability.
- **Coding: 92/100.** SWE-Bench Verified 80.2% (frontier, beats Opus 4.6 on Droid/OpenCode), SWE-Bench Pro 55.4% (mid), Multi-SWE-Bench 51.3% (mid), VIBE-Pro = Opus 4.5, Terminal-Bench 2 runtime = Opus 4.6 with 10% cost. Best-in-class verified solve rate with exceptional efficiency.
- **Cost efficiency: 100/100.** Open-weight free; API pricing radically cheaper than frontier ($0.30/$2.40 vs ~$1.25/$4.25 for Muse, ~$3/$15 for Opus).
- **Overall Score: 76/100.** Mean of (85 + 82 + 100 + 20 + 92) / 5 = 76.