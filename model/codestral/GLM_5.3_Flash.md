# Codestral (22B v0.1) — findings by GLM 5.3 Flash

- Source: Mistral/codestral (`codestral-22B-v0.1`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Codestral (Codestral 22B v0.1)
- **Short description:** Mistral's first-ever code model (May 2024) — a 22B open-weight generative model for code generation, fluent in 80+ programming languages, with a shared instruct + fill-in-the-middle (FIM) API. Historic significance: the model that anchored Mistral's coding stack; today it is a legacy checkpoint — Mistral's current Codestral API SKU is Codestral 25.08 and `codestral-latest` resolves to that successor.
- **Provider / access:** open weights on Hugging Face (`mistralai/Codestral-22B-v0.1`) under the Mistral Non-Production License (MNPL; commercial license on demand); launch-era dedicated endpoint `codestral.mistral.ai` (8-week free beta, waitlist-gated) and `api.mistral.ai`. **No standalone current API SKU**: Mistral's live pricing page (checked 2026-11-06) lists only Codestral 25.08 under Code models; self-hosting is the practical access route today.
- **Release / knowledge:** released 2024-05-29; knowledge cutoff not published on the consulted vendor pages (no verified public cutoff found).
- **IDs:** `mistralai/Codestral-22B-v0.1` (HF); launch API IDs `codestral-latest`/`codestral-22B` (now aliased to the 25.08 successor on Mistral's API). No OpenCode Zen ID.
- **Context window:** 32K total (vendor announcement, verified 2026-11-06 — the launch headline vs 4K–16K competitors). Max output not published on consulted pages.
- **Modalities:** text in (code + English); text out. Instruct mode supports tool calling (partner-tested with LangGraph/LangChain); FIM mode takes prompt+suffix. No image/audio/PDF input.
- **Pricing (as of 2026-11-06):** no active standalone per-token price (superseded by Codestral 25.08, $0.30/$0.90). Open weights are free to download for research/testing under MNPL; self-hosting cost depends on infrastructure (single-GPU-class 22B).
- **Architecture:** 22B dense; open weights under MNPL (research/testing; commercial license separately available).

### Raw benchmarks found

Most launch benchmark figures are chart images without printed values; the one printed third-party number is JetBrains' Kotlin eval. Normalization below is provisional on thin absolute evidence.

Coding:

- Kotlin-HumanEval pass@1 (T=0.2): **73.75** (JetBrains researcher Mikhail Evtikhiev, third-party measurement printed in the vendor announcement; vs GPT-4-Turbo 72.05, GPT-3.5-Turbo 54.66 on the same harness)
- RepoBench EM (long-range repo-level completion): "outperforms all other models" with its 32K window (vendor claim, no values printed)
- FIM (HumanEval pass@1 in Python/JS/Java): compared against DeepSeek Coder 33B (vendor, no values printed)
- SWE-bench Verified / LiveCodeBench / SciCode: no verified public score found

Agent / tool use:

- Terminal-Bench / Tau2 / Tau3 / GDPval-AA / Claw-Eval: no verified public score found (tool calling in instruct mode verified only anecdotally by LangChain partner testing)

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / CritPt / Intelligence Index: no verified public score found

Long context:

- No long-context retrieval scores (MRCR / RULER / GraphWalks) found; 32K is vendor-stated.

### Normalized scores (1–100)

- **Tool use: 35/100.** Instruct mode's tool calling is real (LangChain/LangGraph partner testing "worked out-of-the-box") but zero agentic benchmark evidence exists for this ID.
- **Reasoning: 30/100.** No reasoning benchmark was ever published for this ID; it is a code-focused 22B chat/completion model.
- **Context window: 33/100.** 32K total → low end of the <100K tier on 2026 standards, even though it was a headline advantage at launch.
- **Multimodal: 15/100.** Text-only (code + English); no image/audio/PDF input.
- **Coding: 55/100.** Kotlin-HumanEval 73.75 (third-party) beat GPT-4-Turbo on the same harness, RepoBench leader claim and FIM specialization are solid, but there is no public agentic-coding (SWE-bench/LiveCodeBench) number and the model is two generations behind the current Codestral line.
- **Cost efficiency: 90/100.** No active paid SKU — free open weights under MNPL and single-GPU self-hosting make it nearly free at the margin; kept below 100 because MNPL restricts production use (commercial license costs extra).
- **Overall Score: 34/100.** (35 + 30 + 33 + 15 + 55) / 5 = 33.6 → 34. Best fit: a legacy self-hosted autocomplete/FIM checkpoint for research and offline IDE completion — new deployments should use Codestral 25.08 or a current coding model instead.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-06
- Method: public internet research (vendor launch announcement, current vendor pricing page, Hugging Face availability); scores are normalized 1–100 interpretations, not official vendor scores. Only one printed third-party absolute benchmark exists for this ID — coding normalization is provisional on it.
- Reference URLs:
  - [Codestral — Mistral launch announcement (2024-05-29)](https://mistral.ai/news/codestral)
  - [Mistral AI Non-Production License (MNPL) — Mistral](https://mistral.ai/news/mistral-ai-non-production-license-mnpl/)
  - [Mistral API pricing (current — Codestral line)](https://docs.mistral.ai/inference/pricing)
  - [Hugging Face — mistralai/Codestral-22B-v0.1](https://huggingface.co/mistralai/Codestral-22B-v0.1)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
