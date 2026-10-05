# Gemma 4 26B A4B — findings by Space Bunny

- Source: Google (`gemma-4-26B-A4B` / `gemma-4-26B-A4B-it`; hosted as `opencode/gemma-4.26b-a4b`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B A4B (instruction-tuned variant: Gemma 4 26B A4B IT)
- **Short description:** Google's Gemma 4 mixture-of-experts workhorse — 25.2B total parameters but only 3.8B active per token, so it runs roughly as fast as a 4B dense model while scoring close to the 31B dense flagship. Built for high-throughput reasoning, coding and vision on modest hardware. Not an alias of another entry here: E2B/E4B/12B Unified/31B are separate Gemma 4 members. "A4B" = active parameters, not a version.
- **Provider / access:** open weights on Hugging Face (`google/gemma-4-26B-A4B`, `google/gemma-4-26B-A4B-it`) under Apache 2.0, with BF16, SFP8, Q4_0/GGUF and `-w4a16-ct` builds plus a 430M-param MTP drafter; also served by Amazon Bedrock (`google.gemma-4-26b-a4b`, `bedrock-mantle` endpoint, OpenAI Responses path), by OpenRouter (`google/gemma-4-26B-A4B-it`), via a free Gemini API tier variant, and hosted at `opencode/gemma-4.26b-a4b`.
- **Release / knowledge:** Gemma 4 family released April 2026; HF repo created 2026-03-11, Bedrock launch date listed 2026-06-10. Knowledge cutoff not stated in the reviewed sources.
- **IDs:** `google/gemma-4-26B-A4B`, `google/gemma-4-26B-A4B-it`, Bedrock `google.gemma-4-26b-a4b`, hosted `opencode/gemma-4.26b-a4b`.
- **Context window:** 256K tokens (262,144) — official Gemma 4 model card lists 256K for the 26B A4B MoE; OpenRouter lists 262,144 in / 16,384 max completion. 30 layers, 1,024-token sliding window, 262K vocabulary.
- **Modalities:** text + image in; text out; thinking mode; native function calling; **no audio input** (audio is E2B/E4B/12B only). Vision encoder ~550M params; object detection, document/PDF parsing, screen and UI understanding, chart comprehension, OCR, handwriting and pointing supported.
- **Pricing (as of 2026-10-05):** Apache 2.0 open weights (self-host: BF16 ≈ 57.7 GB, SFP8 ≈ 28.8 GB, Q4_0 ≈ 14.4 GB). Hosted rates: OpenRouter **$0.07 in / $0.34 out per 1M**; a `google/gemma-4-26b-a4b-it:free` tier is listed on OpenRouter and the Gemini API at $0. The `opencode/gemma-4.26b-a4b` listing is described only as "Standard pricing" — no public per-token rate found for it.
- **Architecture:** MoE, 25.2B total / 3.8B active, 8 of 128 experts active per token plus 1 shared, 30 layers, 262K vocab, Apache 2.0 open weights with QAT and a 430M MTP drafter.

### Raw benchmarks found

All figures are vendor-published instruction-tuned, thinking-mode results from the official Gemma 4 model card / Gemma 4 Technical Report (arXiv 2607.02770) unless stated.

Arena (human preference, 2026-06-19 technical-report snapshot):

- Arena Text Elo: **1438 ±8** (Google model page gives 1441 as of 2026-04-02). Same table: Gemma 4 31B 1451 ±8, DeepSeek V4 Pro Thinking 1458, GLM 5 1457, Gemma 4 26B-A4B 1438, Gemma 3 27B 1366. Note the 12B and the E-tier models have **no published Arena row**.

Agent / tool use:

- Tau2-bench (avg over airline / retail / telecom): **68.2%** — airline **76.0%**, retail **85.5%**, telecom **43.0%** (technical report Table 5). Gemma 4 31B: 76.9% avg (75.0 / 86.4 / 69.3).
- Terminal-Bench Hard: **14.0%** (31B 36.0, 12B 18.0, Gemma 3 27B 4.0).
- IFEval: **98.5%**; IFBench: **72.0%** (31B 98.9 / 76.0).
- Tau3-Banking / GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**.

Reasoning / knowledge:

- GPQA Diamond: **82.3%** (no tools). 31B 84.3, 12B 78.8, Gemma 3 27B 42.4.
- AIME 2026 (no tools): **88.3%** — near the 31B's 89.2. 12B 77.5.
- MMLU Pro: **82.6%**; MMMLU (multilingual): **86.3%** (31B 88.4).
- BigBench Extra Hard (micro avg): **64.8%** (31B 74.4, 12B 53.0).
- HLE: **8.7%** no tools, **17.2%** with search (31B 19.5 / 26.5).
- LCR / MLCR / CritPt / Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**.

Coding:

- LiveCodeBench v6: **77.1%** (31B 80.0, 12B 72.0, Gemma 3 27B 29.1).
- Codeforces ELO: **1718** (31B 2150, 12B 1659).
- SciCode: **40.0%** (31B 43.0, 12B 38.0).
- SWE-bench Verified / SWE-Pro / Vibe Code Bench: **no verified public score found**.

Long context:

- MRCR v2 8-needle @128k (average): **44.1%** (31B 66.4, 12B 43.4).
- RULER accuracy @32k: **97.3%** — the best in the Gemma 4 line (31B 96.8, 12B 96.4). No RULER figure published above 32k, so the 256K ceiling is unmeasured.

### Normalized scores (1–100)

- **Tool use: 72/100.** Tau2 average 68.2% with retail 85.5% shows real multi-step tool competence, and 98.5 IFEval / 72.0 IFBench confirm instruction and format discipline. Capped hard by Terminal-Bench Hard at 14.0% — the weakest score of any mid-size Gemma 4 and less than half the 31B's 36.0 — meaning autonomous terminal work is not its strength; no Tau3/MCP-Atlas/Claw-Eval evidence exists either.
- **Reasoning: 84/100.** GPQA Diamond 82.3% and AIME 2026 88.3% put it within ~1–2 points of the 31B flagship, MMMLU 86.3% shows real multilingual depth, and BBEH 64.8% is solid. Held below the low 90s by HLE at only 8.7% no-tools (17.2% with search) and by Arena Elo 1438 trailing the closed frontier (DeepSeek V4 Pro Thinking 1458, GLM 5 1457).
- **Context window: 85/100.** 256K tokens with RULER 97.3% @32k is a genuine medium-tier window, but it is a quarter of the 1M class and MRCR @128k at 44.1% shows needle retrieval degrades to near-chance well before the nominal limit — roughly half the 31B's 66.4%.
- **Multimodal: 76/100.** Vision is solid for an MoE this small (MMMU Pro 73.8, MATH-Vision 82.4, InfographicVQA 89.3, OmniDocBench 1.5 edit distance 0.149, MedXPertQA MM 58.1) and it sits close to the 31B on all of them. Capped because **audio input is absent** (unlike the E2B/E4B/12B) and there is no video path benchmarked — text + image only.
- **Coding: 79/100.** LiveCodeBench v6 77.1% and Codeforces 1718 land within a hair of the 31B (80.0 / 2150) and clearly ahead of the 12B, and SciCode 40.0% shows real scientific coding. No SWE-bench Verified, SWE-Pro or Vibe Code Bench figure is published, and Terminal-Bench Hard 14.0% caps end-to-end agentic coding.
- **Cost efficiency: 94/100.** Apache 2.0 weights plus a genuinely cheap hosted rate ($0.07 / $0.34 per 1M on OpenRouter) and an available $0 free tier make this one of the cheapest capable models in the comparison; only 3.8B active parameters per token keeps self-hosted inference cheap too. Not 100 because the best-supported routes are metered.
- **Overall Score: 79.2/100.** Near-31B quality at 4B-active inference cost — the efficiency champion of the Gemma 4 line and a strong default for high-volume reasoning/coding with vision; best fit for batch and agentic workloads where throughput per dollar matters more than frontier Elo.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-05
- Method: public internet research (Google AI for Developers Gemma 4 model card, Hugging Face `google/gemma-4-26B-A4B` model card, Gemma 4 Technical Report arXiv 2607.02770, Google DeepMind model page, Amazon Bedrock model card, OpenRouter listing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.