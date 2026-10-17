# Gemma 4 26B A4B — findings by GLM 5.3 Flash

- Source: Google DeepMind (`gemma-4.26b-a4b`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B A4B (MoE)
- **Short description:** Google DeepMind's open-weights Gemma 4 MoE variant — 26B total parameters with ~4B active, trading a small compute footprint for near-31B reasoning in class comparisons. Top use cases: cheap hosted inference, math/competitive-programming strength on a budget, and self-hosting. BenchLM ranks it #116 of 889 (45.89).
- **Provider / access:** Hugging Face (google/ Gemma 4 collection, Apache 2.0); hosted on OpenRouter (free tier available) and third-party hosts (Inworld, anotherwrapper comparisons); indexed by Artificial Analysis via OpenRouter. Chat Completions-style API on aggregators.
- **Release / knowledge:** Gemma 4 family, first half of 2026 (26B A4B reviewed in comparisons from May–Aug 2026); knowledge cutoff not published.
- **IDs:** Artificial Analysis/OpenRouter `gemma-4-26b-a4b`-class listing; HF Gemma 4 collection (`google/gemma-4-26B-A4B-it`). No dedicated OpenCode Zen Free ID verified (OpenRouter free tier exists).
- **Context window:** 256K tokens per family documentation (BenchLM concurs); one practical guide (MindStudio) cites 128K "in practice" for the 12B and 26B variants — unresolved practical-vs-rated gap.
- **Modalities:** text + image input per Gemma 4 family multimodal positioning (now measured: MMMU-Pro 73.8/69.2), text output. Tool calls: exercised via agentic SWE-bench harnesses; JSON mode not documented.
- **Pricing (as of 2026-10-11):** $0.07 / $0.34 per 1M in/out (Inworld listing); $0.13/1M input in anotherwrapper's Seed 2.1 Turbo comparison (82% cheaper); free tier on OpenRouter (typical free-tier data-usage caveats). Apache 2.0 weights = free self-hosting.
- **Architecture:** 26B total parameters, ~4B active (Mixture-of-Experts); Apache 2.0; member of the 2.3B–31B Gemma 4 family (dense E2B/E4B/12B/31B + this MoE); also cited as an architecture base in a DiffusionGemma arXiv paper.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **713** (AA, independent — normalized **3.4%**, floor-class)
- τ²-bench: **43.6%** (AA, independent — fills the gap; weak)
- SWE-bench Lite (agentic, local FP8 + Moatless Tools scaffold): **38.67%** (116/300), ranked #16 globally at the time (ai-muninn.com, prior pass); SWE-bench Verified (grigio.org harness): **17.4%** (prior pass — scaffold-dependent spread)
- Terminal-Bench 2.1 / Tau3 / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **82.3%** (HF model card via benchlm.ai — **up from the 71.4% AA-via-OpenRouter reading the prior pass cited**); AA independent: **79.2%**
- HLE: **17.2%** with tools / **8.7%** without (HF card — fills the gap; floor-class)
- Artificial Analysis Intelligence Index: **16.7** (AA — fills the index gap; low)
- MMLU-Pro: **82.6%** (model card); AIME: class-leading claims (prior pass; family 31B cites 89.2% AIME 2026)
- MRCR v2: **44.1%** (HF card — first measured long-context retrieval, weak); AA-LCR v1.1: **65.7%** (AA — fills the gap); CritPt: **0.0%** (AA — floor)
- AA-IFBench: **72.4%** (AA — added 2026-10-16, solid)
- AA-HLE (independent): **19.3%** (added 2026-10-16 — second reading, above the vendor's 8.7%-without-tools / 17.2%-with-tools band)

Coding:

- LiveCodeBench v6: **77.1%** (HF model card via benchlm.ai — fills the gap; strong for the class)
- AA Coding Index: **39.3%** (AA — new; weak); AA-SciCode: **40.0%** (AA — fills the gap)
- SWE-bench Verified: **17.4%** in one independent harness (grigio.org); the dev.to guide instead reports Gemma 4 26B A4B winning SWE-bench Verified among small open models — harness-dependent spread of roughly 17–39% across scaffolds

Long context:

- MRCR v2 44.1% and AA-LCR 65.7% are the first measured long-context numbers (weak-mid); 256K family window / 128K practical unresolved

Multimodal:

- MMMU-Pro: **73.8%** (model card) / **69.2%** (AA — corroborated) — first measured vision evidence, decent for the class

### Normalized scores (1–100)

- **Tool use: 46/100.** (Was 52 on the prior pass.) The measured rows (τ²-bench 43.6%, GDPval 713 / 3.4% normalized) join the scaffold-dependent SWE-bench spread — the agentic profile is real but fragile.
- **Reasoning: 68/100.** (Was 65 on the prior pass.) GPQA resolves up to 79.2–82.3% (two sources) while HLE 8.7–17.2%, AA Index 16.7 and CritPt 0.0% hold the class ceiling — a small net raise on the stronger GPQA.
- **Context window: 68/100.** 256K family window (BenchLM concurs; 128K practical per one guide); MRCR v2 44.1% and AA-LCR 65.7% are the first measured evidence (weak-mid).
- **Multimodal: 65/100.** (Was 55 on the prior pass.) Measured vision now exists (MMMU-Pro 73.8/69.2%) — raised from credited-only to measured within the image-in band.
- **Coding: 64/100.** (Was 58 on the prior pass.) LiveCodeBench v6 77.1% (HF card) is a strong fill for the class, with AA Coding Index 39.3% and AA-SciCode 40.0% tempering it; the SWE-bench scaffold spread stands.
- **Cost efficiency: 94/100.** $0.07–$0.13 per 1M input, a free OpenRouter tier, and Apache 2.0 weights make it among the most cost-efficient in class; short of 100 only because output-token pricing varies by host.
- **Overall Score: 62.2/100.** (Was 59.6 on the prior pass.) Mean of the five quality dims per `RULES.md` (Cost excluded): (46 + 68 + 68 + 65 + 64) / 5 = 311/5 = 62.2 — raised on the 2026-10-11 second pass as the HF-card fills (GPQA up, LiveCodeBench, vision measured) outweigh the weak agentic rows. Best fit: ultra-cheap hosted or self-hosted general reasoning; agentic coding only with a well-tuned scaffold.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-16
- Method: public internet research, second pass 2026-10-11 (≥3 independent sources: benchlm.ai updated 2026-10-10 citing the Gemma 4 26B A4B HF model card, Artificial Analysis model benchmarks via benchlm.ai, the prior 2026-10-05 pass on AA-OpenRouter/ai-muninn/grigio/dev.to; 2026-10-16 re-check: BenchLM 22-row refresh corroborates all rows (AA-IFBench 72.4%, AA-HLE 19.3% added) — no score changes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
