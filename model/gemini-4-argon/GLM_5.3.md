# Gemini 4 Argon — findings by GLM 5.3

- Source: Google DeepMind (`gemini-4-argon`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon (High)
- **Short description:** Google's proprietary Gemini-4 reasoning model (Argon), released one day before this report; top-10 class intelligence with strong agentic/coding numbers. Top use case: long-context agentic coding and professional knowledge work at $2/$10 pricing.
- **Provider / access:** Google API, model ID `gemini-4-argon` (per Artificial Analysis, 1 provider); official evaluation methodology page at deepmind.google.
- **Release / knowledge:** released 2026-09-30; knowledge cutoff not stated publicly
- **IDs:** `google/gemini-4-argon` (no Free ID found on OpenCode Zen as of 2026-10-01)
- **Context window:** 1M tokens total (Artificial Analysis); input/output split not yet published
- **Modalities:** text + image in; text out; reasoning yes (High effort shown; non-reasoning variant may exist); output speed not yet measured by AA
- **Pricing (as of 2026-10-01):** $2.00 / 1M input; $10.00 / 1M output; cache discount 95%; $1.99 per AA Intelligence Index task (verbosity-inflated). Paid only — no free tier.
- **Architecture:** proprietary; parameters undisclosed

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found** (closest proxy: Terminal-Bench 4.0 **57.40%** / AA Terminal-Bench 4.0 **57.1%**, BenchLM — provisional, different harness)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **1611 Elo** (BenchLM; 55.6% normalized)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas: **no verified public score found** (CWE-bench v1: **68.0%**, BenchLM — security/agentic proxy)
- AutomationBench: **51.3%** plain / **77.5%** AA harness (BenchLM)
- OSWorld 2.0: **69.2%** (BenchLM)
- Agents' Last Exam: **39.5%** (BenchLM)
- AA-Briefcase v1.1: **1494 Elo** (BenchLM)
- Finance Agent v2: **65.4%**; GDP.pdf: **21.8%** (BenchLM)
- Terminal-Bench-Science 0.1: **57.6%** (BenchLM, 6x verifier timeout variant)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **57.1%** (AA-HLE, BenchLM)
- LCR / MLCR: AA-LCR **79.7%** (BenchLM)
- CritPt: **27.1%** (BenchLM)
- Artificial Analysis Intelligence Index / BenchLM overall: **53 / #8 of 223 in class** (AA v4.3.2); BenchLM overall **77.18 / #10 of 637**
- Omniscience Accuracy / Hallucination Rate: **49.9% / 15.1%** (AA via BenchLM; Index 42.4 — low hallucination, mid accuracy)
- LABBench2: **88.8%** (BenchLM)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found** (proxies: DeepSWE **77.9%**, FrontierSWE v2 **55.1%**, PostTrainBench v1.1 **45.3%** — BenchLM)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **61.8%** (AA-SciCode, BenchLM)
- Vibe Code Bench: **91.90%** (BenchLM)

Long context:

- GraphWalks BFS **99.7%** at 128K; **84.2%** across 256K–1M (BenchLM); AA-LCR **79.7%**; 1M window verified via Artificial Analysis.

Multimodal (grounded):

- Chartography (no tools): **71.6%** (BenchLM); LVBench: **91.7%** (BenchLM). No MMMU-Pro score published yet for this ID.

### Normalized scores (1–100)

- **Tool use: 78/100.** GDPval-AA 1611 Elo and AA-AutomationBench 77.5% approach frontier agentic territory; OSWorld 2.0 69.2% and TB 4.0 ~57% are strong but short of the ~85%+ TB frontier band; Agents' Last Exam 39.5% caps it.
- **Reasoning: 82/100.** AA-HLE 57.1% and LABBench2 88.8% are top-tier, hallucination rate is an excellent 15.1%, and the AA Intelligence Index ranks #8/223; capped by weak CritPt 27.1% and mid omniscience accuracy 49.9%.
- **Context window: 95/100.** 1M verified (AA) with measured GraphWalks retrieval 99.7% at 128K but only 84.2% across 256K–1M — ≥1M tier without the ≥98%-at-512K+ needed for 100.
- **Multimodal: 68/100.** Text + image input only (AA-verified; no video/audio input, text-only output) with strong grounded-vision proxies (LVBench 91.7%, Chartography 71.6%) — top of the image-in tier, capped by modality coverage.
- **Coding: 90/100.** DeepSWE 77.9% clears the 74% frontier ref, AA-SciCode 61.8% clears 55%, and Vibe Code Bench 91.9% is outstanding; capped only by missing SWE-bench Verified / LiveCodeBench rows on this exact ID.
- **Cost efficiency: 68/100.** $2/$10 per 1M matches the ~72 reference band, but heavy verbosity (110M tokens on the AA Index vs 82M median) drives $1.99/task — nearly 3x the per-task cost of same-priced, more concise peers.
- **Overall Score: 83/100.** (78 + 82 + 95 + 68 + 90) / 5 = 82.6 → 83. Best fit: frontier-class long-context agentic coding and knowledge work where hallucination-averse output matters; budget per task carefully — it thinks (and prints) a lot.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-01 UTC
- Method: public internet research (Artificial Analysis, BenchLM, DeepMind evaluation-methodology page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
