# Claude 3.5 Haiku — findings by Step 5 Preview

- Source: Anthropic (`claude-3-5-haiku-20241022`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude 3.5 Haiku (announced 2024-10-22, GA 2024-11-04)
- **Short description:** Anthropic's fast, cost-efficient 3.5-generation model — the Haiku-speed-tier model that matched its previous flagship Claude 3 Opus on many benchmarks, and whose launch headline was coding: **40.6% on SWE-bench Verified**, which Anthropic said outperformed many agents built on then-state-of-the-art models (including the original Claude 3.5 Sonnet and GPT-4o). It launched text-only (vision input arrived on the first-party API 2025-02-25; some platforms like Bedrock never got it), with a 200K context and an 8K output cap. **Retired**: deprecated 2025-12-19 and retired from the Anthropic API 2026-02-19 (Bedrock EOL 2026-06-19); the recommended replacement is Claude Haiku 4.5.
- **Provider / access:** Was Anthropic API, Amazon Bedrock, Google Cloud Vertex AI; proprietary, API-only.
- **Release:** 2024-10-22. Knowledge cutoff July 2024.
- **Context window:** 200K tokens; max output 8,192.
- **Modalities:** Text and image in → text out (image input added post-launch).
- **Pricing (last list price):** $0.80/M input, $4.00/M output, $0.08 cache read (launched $1/$5, cut 2024-12-05).
- **Architecture:** proprietary dense transformer; parameters undisclosed.

### Raw benchmarks found

At launch (Anthropic):

- SWE-bench Verified: **40.6%** — the standout small-model coding result of its moment
- HumanEval: **88.1%**; MBPP: **85.6%**; MGSM: **85.6%**; DROP (F1): **83.1%**

Third-party historical aggregations (LLMLearner, ECI):

- MMLU: **77.6**; MMLU-Pro: **65.0**; MATH: **69.2–69.4**
- GPQA Diamond (normal, no tools): **41.6** (an earlier GPQA Full run scored 77.6 on the model-card variant); MMMU-Pro: **45.6**
- Aider-Polyglot: **28.0%**; Terminal-Bench Hard (with tools): **2.3%**
- SimpleQA: **8.0**; FrontierMath: **0.3**; Creative Writing 1,146 Elo; ECI 127
- Artificial Analysis Intelligence Index: **9** (deprecated-model page, 10k workload only)
- Benchmarks that did not exist at its launch (TB 2.x, τ³, MCP Atlas, GDPval, HLE, ARC-AGI, MRCR): **no verified public score found**

### Normalized scores (1–100)

- **Tool use: 35/100.** Native tool use existed in the API but no agentic-harness benchmark of its era (or since) was run — Terminal-Bench Hard 2.3% in later retro-tracking is the only agentic number and it is near zero; a structural low score.
- **Reasoning: 45/100.** MMLU 77.6 / MMLU-Pro 65.0 / MATH 69.2 were mid-tier for late 2024 and are far below the 2026 frontier; GPQA Diamond 41.6%, SimpleQA 8.0%, FrontierMath 0.3% and AA Intelligence Index 9 mark a small non-reasoning model well past its shelf life.
- **Context window: 70/100.** 200K is the floor of the 200K–500K band (65–84) with no published retrieval curve (no NIAH/MRCR figure) to lift it higher.
- **Multimodal: 62/100.** Text + image in → text out is the 60–70 band (vision added 2025-02-25, absent on Bedrock); MMMU-Pro 45.6% is weak image understanding even for its generation.
- **Coding: 48/100.** SWE-bench Verified 40.6% and HumanEval 88.1%/MBPP 85.6% were genuinely good at launch for the small-model class (beating original Sonnet 3.5 and GPT-4o on SWE-V), but retro-tracked Aider-Polyglot 28.0% and Terminal-Bench Hard 2.3% show it did not age into an agentic coder.
- **Cost efficiency: 90/100.** $0.80/$4.00 per million tokens with $0.08 cache reads sits in the methodology's ~$0.6–1.25/$2.2–4.25 ≈ 88–92 range — cheap for its capability in 2024, and retired since February 2026.
- **Overall Score: 52/100.** Best-fit recommendation: a historical marker — the first small model to clear 40% SWE-bench Verified and match Claude 3 Opus at Haiku speed; retired since 2026-02-19, relevant only as a migration source (Haiku 4.5 is the successor and is 32 points better on SWE-V).

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Anthropic Haiku page + model-deprecations doc, Artificial Analysis deprecated-model page, AI/TLDR and LLMLearner historical aggregations, Bedrock model card); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Haiku_4_5_2026.md`, using the same headings.
