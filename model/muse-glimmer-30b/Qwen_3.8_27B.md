# Muse Glimmer 30B — findings by Qwen 3.8 27B

- Source: Meta (`muse-glimmer-30b`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Glimmer 30B
- **Short description:** Meta Superintelligence Labs' dense 30B open-weights agent model (Aug 2026) — "an open model built for always-on local agents", distilled from Muse Spark and tuned for tool use, long tasks, and failure recovery on consumer hardware; Meta's first Apache 2.0 release since Llama 4.
- **Provider / access:** Meta API (dev.meta.ai/models/muse-glimmer); open weights (full-precision + two 4-bit variants, Hugging Face `meta/Muse-Glimmer-30B` family); hosted providers incl. batch tier (Benchable). No OpenCode Zen ID (not in Zen model list).
- **Release / knowledge:** released ~2026-08-10 (Benchable slug; llm-stats says Aug 2026); knowledge cutoff not disclosed.
- **IDs:** `meta/Muse-Glimmer-30B` (Hugging Face); provider API ids vary. No Zen ID.
- **Context window:** 131K total (BenchLM / llm-stats); max-output split not independently verified.
- **Modalities:** text / image in, text out; explicit reasoning mode (fast/slow); tool calls yes (MCP Atlas verified); runs on a single GPU (vendor).
- **Pricing (as of 2026-09-29):** ~$0.30 in / $1.20 out / $0.04 cached in per 1M (llm-stats provider listing); Apache 2.0 self-hosting available.
- **Architecture:** 30B dense, open weights, Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **51.7%** (AA harness, BenchLM 2026-09-28); TB4.0 **0.5%** (early harness)
- Tau3-Banking / Tau2-Bench: AA Tau3 Banking **23.5%** (BenchLM)
- GDPval-AA: **774** (**13.7%** normalized) (BenchLM)
- Claw-Eval / ClawProBench: skillsBench **44.3%** (BenchLM)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: MCP Atlas **75.5%** (BenchLM)
- OSWorld-Verified **65.9%**; DeepSearchQA **74.6%**; AA EnterpriseOps-Gym **34.7%**; AA Agentic Index **10.5%**; AA Briefcase Elo **474**; AA AutomationBench **6.8%**; GDP.pdf **10.0%** (BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **83.5%** (AA-GPQA via BenchLM)
- HLE: **22.0%** (AA-HLE via BenchLM)
- LCR / MLCR: LCR **83.3%**; MLCR-AA **20.0%** (BenchLM/AA)
- CritPt: **2.6%** (BenchLM)
- Artificial Analysis Intelligence Index / BenchLM overall: **17.5** (BenchLM) / **35** (AA "(high)" variant, AA article — variant/thinking-level difference noted) / BenchLM overall **41.6 (#120 of 512)**
- Omniscience Accuracy / Hallucination Rate: **27.0% / 81.9%** (AA via BenchLM); AIME26 **94.7%**; IFBench **77%** (BenchLM)

Coding:

- SWE-bench Verified / SWE-Pro: **76% / 51.2%** (BenchLM)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: **43.6% / 44.9%** (BenchLM/AA)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: AA Coding Index **49.0%** (BenchLM)

Long context:

- 131K window; no dedicated retrieval benchmark at window length found beyond AA-LCR 83.3%.

Multimodal:

- MMMU-Pro **74%** (AA 74.3%); CharXiv **78.8%**; ScreenSpot Pro **75.4%**; OmniDocBench 1.5 **75.8%** (all BenchLM)

### Normalized scores (1–100)

- **Tool use: 58/100.** TB2.1 51.7% and Tau3 23.5% in the mid band, MCP Atlas 75.5% and OSWorld 65.9% solid; capped by GDPval-AA 774 (below the 900–1200 mid band) and AA Agentic Index 10.5%.
- **Reasoning: 65/100.** GPQA 83.5% above the mid band and LCR 83.3% strong, AIME26 94.7% excellent; capped by HLE 22.0%, CritPt 2.6%, AA Index 17.5 (low-mid) and an 81.9% hallucination rate.
- **Context window: 58/100.** 131K sits in the 100K–200K tier (50–64), upper part.
- **Multimodal: 68/100.** Text + image in with strong document/visual scores (MMMU-Pro 74%, CharXiv 78.8%, OmniDocBench 75.8%, ScreenSpot Pro 75.4%) — top of the image-in tier (60–70).
- **Coding: 68/100.** SWE-bench Verified 76% and SWE-Pro 51.2% mid-strong; capped by SciCode 43.6% (<55), Coding Index 49.0% and TB2.1 51.7%.
- **Cost efficiency: 95/100.** ~$0.30/$1.20 per 1M (hosted) sits between the ~$0.10/$0.20 = 97–99 and ~$0.60/$2.20 = ~92 reference points; Apache 2.0 self-hosting lowers the floor.
- **Overall Score: 63/100.** (58 + 65 + 58 + 68 + 68) / 5 = 63.4 → 63. Best fit: cheap, reliable always-on local agent for tool-heavy long tasks with vision/document input; not a frontier coder.

---

## Signature

- Provided by: **Qwen 3.8 27B (openrouter/qwen/qwen3.8-27b:free)** — 2026-09-29
- Method: public internet research (BenchLM, Artificial Analysis, dev.meta.ai, llm-stats, Benchable, lmmarketcap); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
