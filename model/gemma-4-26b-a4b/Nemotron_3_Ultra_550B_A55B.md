# Gemma 4 26B A4B — findings by Nemotron 3 Ultra 550B A55B

> Research agent: Nemotron 3 Ultra 550B A55B (NVIDIA Nemotron 3 Ultra, 550B total / 55B active MoE)
> Date: 2026-10-27 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B A4B (gemma-4-26b-a4b-it)
- **Short description:** Google DeepMind's Mixture-of-Experts model (25.2B total, 3.8B active), released April 2026. Open-weight under Apache 2.0. Designed for high-throughput reasoning with near-31B dense quality at fraction of compute. Native multimodal (text, image, video up to 60s@1fps). 256K context. 8 active experts / 128 total + 1 shared.
- **Provider / access:** Google AI Studio (free), Hugging Face (`google/gemma-4-26B-A4B-it`), OpenRouter, DeepInfra, Cloudflare, Novita AI, SiliconFlow, CoreWeave, Prime Intellect, Makora, DekaLLM, AkashML, io.net, Parasail, Venice, NextBit, Google Vertex AI. Chat Completions API. Function calling, structured output, reasoning mode.
- **Release / knowledge:** 2026-04-03 release; knowledge cutoff not published.
- **IDs:** `gemma-4-26b-a4b-it` (HF/Google AI Studio), `google/gemma-4-26b-a4b-it` (OpenRouter/Vertex), `@cf/google/gemma-4-26b-a4b-it` (Cloudflare). Free on Google AI Studio.
- **Context window:** 262,144 tokens (256K). Verified via Google model card, HF, OpenRouter, Cloudflare.
- **Modalities:** Text and image input; text output. Video input (up to 60s at 1fps). Reasoning: yes (configurable thinking mode). Tool calls: yes (native function calling). JSON mode: yes. Structured output: yes. No audio support (unlike E2B/E4B/12B).
- **Pricing (as of 2026-10-27):** Google AI Studio: **FREE**. OpenRouter avg: $0.042/M in, $0.22/M out, cache $0.021/M. Darkbloom: $0.04/$0.22. DeepInfra: $0.07/$0.34. Cloudflare: $0.10/$0.30. Vertex AI: $0.15/$0.60. Blended ~$0.05–0.15/M. Free tier on Google AI Studio.
- **Architecture:** MoE: 25.2B total params, 3.8B active. 30 layers, sliding window 1024, vocab 262K. 8 active experts / 128 total + 1 shared. Vision encoder ~550M params. Apache 2.0 license.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:

- Tau2 (avg over 3): **68.2%** — Google model card / technical report (thinking)
  - Airline: **76.0%** / Retail: **85.5%** / Telecom: **43.0%** — Technical report Table 5
- IFBench: **72.0%** — Google model card / technical report
- IFEval: **98.5%** — Google model card / technical report
- AA-IFBench: **72.4%** — BenchLM (Artificial Analysis)
- τ²-Bench: **43.6%** — BenchLM (Artificial Analysis)
- GDPval-AA: **3.2%** / **713 Elo** — BenchLM (Artificial Analysis)
- Terminal-Bench Hard: **14.0%** — Technical report Table 5
- Toolathlon / MCP-Atlas / BrowseComp / WideSearch: **no direct score** for 26B A4B

Reasoning / knowledge:

- MMLU Pro: **82.6%** — Google model card / technical report / HF / blog (thinking)
- AIME 2026 (no tools): **88.3%** — Google model card / technical report / HF / blog
- GPQA Diamond: **82.3%** — Google model card / technical report / HF / blog / BenchLM (82.3%)
- AA-GPQA Diamond: **79.2%** — BenchLM (Artificial Analysis)
- HLE (no tools): **8.7%** — Google model card / technical report
- HLE (with search): **17.2%** — Google model card / technical report
- BigBench Extra Hard: **64.8%** — Google model card
- MMMLU: **86.3%** — Google model card
- MRCR v2 8-needle 128k: **44.1%** (avg) — Google model card / technical report / HF
- AA-LCR: **65.7%** — BenchLM (Artificial Analysis)
- RULER 32k: **97.3%** / 128k: **89.8%** — Technical report Table 9
- LOFT retrieval 128k: **66.3%** — Technical report Table 9
- GraphWalks F1 <128k: **72.6%** — Technical report Table 9
- MTOB (En→Kgv) 128k: **50.0%** / 256k: **48.9%** — Technical report Table 9
- CritPt: **0.0%** — BenchLM (Artificial Analysis)
- AA Intelligence Index: **16.7%** / **17** (estimated) — BenchLM / Artificial Analysis
- AA-HLE: **19.3%** — BenchLM
- AA-Omniscience Accuracy: **19.1%** / Hallucination Rate: **86.4%** — BenchLM

Coding:

- LiveCodeBench v6: **77.1%** — Google model card / technical report / HF / BenchLM
- Codeforces Elo: **1718** — Google model card / technical report
- AA Coding Index: **39.3%** — BenchLM (Artificial Analysis)
- AA-SciCode: **40.0%** — BenchLM
- SciCode: **40.0%** — Technical report Table 5
- SWE-bench Verified / Pro / Terminal-Bench: **no direct score** for 26B A4B
- HumanEval / MBPP: **no direct score** for 26B A4B

Long context:

- MRCR v2 8-needle 128k: **44.1%** (avg) — Google model card / technical report
- RULER 32k: **97.3%** / 128k: **89.8%** — Technical report Table 9
- LOFT retrieval 128k: **66.3%** — Technical report Table 9
- GraphWalks F1 <128k: **72.6%** — Technical report Table 9
- MTOB (En→Kgv) 128k: **50.0%** / 256k: **48.9%** — Technical report Table 9
- MTOB (Kgv→En) 128k: **45.0%** / 256k: **42.7%** — Technical report Table 9
- Native 256K context verified (262K per HF)

Multimodal:

- MMMU Pro: **73.8%** — Google model card / technical report / BenchLM
- AA-MMMU-Pro: **69.2%** — BenchLM
- MATH-Vision: **82.4%** — Google model card / technical report
- OmniDocBench 1.5 (edit distance, lower better): **0.149** — Google model card
- MedXPertQA MM: **58.1%** — Google model card
- InfographicVQA: **89.3%** — Technical report Table 6
- ExtractBench (LlamaIndex): **70.27%** — BenchLM (LlamaIndex leaderboard Oct 25)
- ParseBench: **58.50%** — BenchLM (LlamaIndex leaderboard Oct 25)
- Vision: text, image, video (up to 60s@1fps). No audio.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 65/100.** Tau2 avg 68% (retail 86%, airline 76%, telecom 43%), IFBench 72%, IFEval 99%, τ²-Bench 44%, GDPval-AA 3%/713 Elo. Strong retail/airline tool use but telecom weak and GDPval very low. Capped by GDPval-AA 3% and no Terminal-Bench/SWE-bench/MCP-Atlas scores.
- **Reasoning: 70/100.** MMLU Pro 83%, AIME 2026 88%, GPQA Diamond 82%, HLE 9% (no tools) / 17% (w/search), BigBench 65%, MRCR 44%, AA-LCR 66%, RULER 90% (128k), CritPt 0%, AA Index 17. Excellent math (AIME 88%) and knowledge (MMLU 83%) but HLE 9% and CritPt 0% severe outliers. Capped by HLE 9% and CritPt 0%.
- **Context window: 80/100.** 256K native (256K–512K tier = 70–80, but strong retrieval pushes higher). MRCR 44%, RULER 90% (128k), LOFT 66%, GraphWalks 73%, MTOB 50% (128k). Good retrieval but MRCR 44% below 31B (66%). Capped by MRCR 44% vs 31B 66%.
- **Multimodal: 75/100.** Text + image + video (60s@1fps). MMMU Pro 74%, MATH-Vision 82%, OmniDocBench 0.149, MedXPertQA 58%, InfographicVQA 89%, ExtractBench 70%, ParseBench 59%. Strong vision reasoning and document understanding. Capped by no audio support, text-only output.
- **Coding: 65/100.** LiveCodeBench 77%, Codeforces 1718, SciCode 40%, AA Coding Index 39%, AA-SciCode 40%. Good LiveCodeBench but no SWE-bench/Terminal-Bench/HumanEval. Capped by missing agentic coding benchmarks and SciCode 40%.
- **Cost efficiency: 98/100.** **FREE on Google AI Studio**. OpenRouter avg $0.04/$0.22. Darkbloom $0.04/$0.22. Apache 2.0 open weights — self-host free. Among the very best cost efficiency in class.
- **Overall Score: 71/100.** Mean of (65+70+80+75+65)/5 = 71.0. Queue shows 72.6 — very close. BenchLM: 45.8 (partial coverage). Best fit: exceptional value MoE for reasoning/coding/vision; free on AI Studio; 3.8B active params = fast; HLE/CritPt outliers noted.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-27
- Method: Public internet research across 5+ independent sources (Google model card, DeepMind blog, HF model card, Gemma 4 technical report arXiv 2607.02770, BenchLM, Artificial Analysis, OpenRouter, DreamJTech local comparison, Gemma4All benchmark comparison); scores normalized 1–100 per model-comparison.md methodology. **Critical notes:** HLE 8.7% and CritPt 0% are severe outliers vs other reasoning benchmarks (AIME 88%, GPQA 82%, MMLU 83%) — may reflect thinking-mode eval differences. All scores from Google's thinking-mode evals unless noted. Free on Google AI Studio confirmed.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.