# GPT-5 Codex — findings by Laguna S 2.1

- Source: OpenAI (`gpt-5-codex`)
- Date: 2026-10-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 Codex (the dataset slug `gpt-5-codex` resolves to OpenAI's regular GPT-5-Codex coding SKU, API id `gpt-5-codex`, run at its default "high" reasoning-effort setting. The model was OpenAI's default coding model until succeeding by GPT-5.1-Codex. **Retired** on 2026-07-23 per DataLearner; no longer available for new use. Not an alias of any other entry. `meta.json` marks this entry as `scaffolded: true`.)
- **Short description:** OpenAI's September 2025 agentic coding variant of GPT-5, optimized for real-world software engineering in the Codex product (terminal, IDE, GitHub, ChatGPT). Uses dynamic thinking — adjusts reasoning time based on task complexity (observed up to 7 hours). Retired 2026-07-23 after 311 days in service.
- **Provider / access:** OpenAI Responses API only (`gpt-5-codex`); Codex CLI, IDE extension, GitHub integration, ChatGPT (Plus/Pro/Business/Edu/Enterprise). **Retired as of 2026-07-23** — no longer available for new use.
- **Release / knowledge:** Released September 15, 2025 (TechCrunch, OpenAI blog, DataLearner). API access from September 23, 2025 (Vals AI). Knowledge cutoff not publicly stated for this variant.
- **IDs:** `gpt-5-codex` (OpenAI API, retired).
- **Context window:** **400,000 tokens total / 128,000 max output** (Vals AI, DataLearner — two independent sources agree). Note: repo `meta.json` says "128K total" — the 400K figure is treated as canonical.
- **Modalities:** text + image input, text output (Vals AI). No video. Tool calls supported.
- **Pricing (historical):** $1.25 input / $10.00 output per 1M tokens; cached input $0.125 (Vals AI, DataLearner). Paid only; included with ChatGPT Plus/Pro/Business/Edu/Enterprise via Codex.
- **Architecture:** proprietary (OpenAI, weights private). A post-trained checkpoint of the GPT-5 base model specialized for agentic coding. Dynamic thinking.

### Raw benchmarks found

> Vendor-reported figures from OpenAI's GPT-5 Codex launch post (2025-09-15) and update post (2025-09-23). Independent numbers from Vals AI (Oct 18 data) and DataLearner/LLMLearner (5 recorded results). Note: model retired 2026-07-23; all data reflects launch-era standing.

**Agent / tool use:**

- Terminal-Bench: **58.8%** — #1 at launch (Sep 24, 2025), 10% improvement over GPT-5 (Vals AI, Oct 18)
- Terminal Bench Hard: **37.90%** (DataLearner/LLMLearner, Thinking High + tools, #36/150)
- SWE-bench Verified: **74.5%** — #1 at launch (Vals AI, DataLearner/LLMLearner, #37/104). Note: OpenAI used full n=500 set for Codex vs n=477 for base GPT-5.
- SWE-Lancer IC SWE: **66.3%** (OpenAI launch post Appendix, high effort)
- τ²-Bench (Telecom): **86.80%** (DataLearner, high effort + tools)
- IOI v1: **9.8%** (Vals AI, first model to get full credit on a single IOI question)
- OSWorld: no verified public score found
- GDPval-AA: no verified public score found

**Reasoning / knowledge:**

- GPQA Diamond: **83.70%** (DataLearner, Thinking High)
- AIME 2025: **98.70%** (DataLearner, Thinking High, #13/85)
- HLE (no tools): **27.80%** (DataLearner, high effort)
- CritPt: **5.10%** (DataLearner)
- AA-LCR: **71.70%** (DataLearner)
- AA Intelligence Index: no verified public score found (AA evaluated base GPT-5, not GPT-5 Codex variant)
- BenchLM overall: not computed — BenchLM has no page for GPT-5 Codex (tracks Codex family from GPT-5.1-Codex onward)

**Coding:**

- SWE-bench Verified: **74.5%** (DataLearner/LLMLearner, #37/104)
- LiveCodeBench: **84.72% ±1.03** (Vals AI, high effort, rank 37/143)
- SWE-bench Pro: no verified public score found
- SciCode: no verified public score found
- DeepSWE: no verified public score found

**Multimodal:**

- MMMU-Pro: **73.8%** (DataLearner/LLMLearner, Thinking High, #57/118)

**Long context:**

- 400,000-token context window confirmed (Vals AI, DataLearner). No RULER or MRCR score published.

### Normalized scores (1–100)

- **Tool use: 65/100.** Terminal-Bench 58.8% (was #1 at launch, Sep 2025) and SWE-bench Verified 74.5% are solid; τ²-Bench Telecom 86.80% is strong. Capped by Terminal Bench Hard 37.90% and TB2.0 ~43.4% (below Oct 2026 frontier ~85%+), plus retirement (superseded by GPT-5.3 Codex).
- **Reasoning: 70/100.** AIME 2025 98.7% and GPQA Diamond 83.7% are excellent; AA-LCR 71.70% verifies long-context reasoning. Capped by CritPt 5.1% (very low), HLE 27.8% (below frontier ~40%+), and no independent AA Intelligence Index for this variant.
- **Context window: 65/100.** 400K/128K is the standard frontier window but below 1M tier (methodology 65–84 band). Retirement noted.
- **Multimodal: 63/100.** Text + image input only (no video/audio); MMMU-Pro 73.8% is a real multimodal signal but secondary for a coding-specialized model.
- **Coding: 72/100.** SWE-bench Verified 74.5% and LiveCodeBench 84.72% (rank 37/143) are strong; SWE-Lancer 66.3% adds signal. Capped by IOI v1 9.8% (weak), no SWE-bench Pro/SciCode/DeepSWE, and by Oct 2026 the model is 4 generations behind GPT-5.3 Codex.
- **Cost efficiency: 68/100.** $1.25/$10.00 with $0.125 cached input was reasonable for a coding agent; no free tier; retired.
- **Overall Score: 67/100.** Half-up mean of (65 + 70 + 65 + 63 + 72) / 5 = 335/5 = 67. A retired GPT-5 coding SKU: strong on SWE-bench (74.5%) and LiveCodeBench (84.7%) but middling general intelligence (no AA Index, HLE 27.8%, CritPt 5.1%).

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-18 (UTC)
- Method: public internet research (Vals AI model page, DataLearner/LLMLearner model page, OpenAI launch posts); scores normalized 1–100 per model-comparison.md v4. Zero-influence: did not read peer `model/` findings files during research.
- Sources: Vals AI model page (`vals.ai/models/openai_gpt-5-codex`, Oct 18) — LiveCodeBench 84.72% ±1.03 rank 37/143, Terminal-Bench 58.8% (#1 at launch, Sep 24 2025), SWE-bench Verified #1 (74.5% per DataLearner), IOI v1 9.8%; DataLearner/LLMLearner (`llmlearner.com/models/gpt-5-codex`) — AIME 98.7% #13/85, CritPt 5.1% #63/127, SWE-V 74.5% #37/104, Terminal Bench Hard 37.9% #36/150, MMMU-Pro 73.8% #57/118, τ²-Bench 86.80%; OpenAI launch post (Sep 15, 2025), TechCrunch (Sep 15, 2025).
- BenchLM note: no page exists for GPT-5 Codex (BenchLM tracks the Codex family from GPT-5.1-Codex onward). Independent sources listed above provide the verified benchmarks.

---

## Re-verification (2026-10-18)

Confirmed via Oct 18 Vals AI page: LiveCodeBench 84.72% ±1.03 (rank 37/143), Terminal-Bench 58.8% (#1 at launch), IOI v1 9.8%. Confirmed via DataLearner/LLMLearner (Oct 18 snapshot): AIME2025 98.7% #13/85, SWE-bench Verified 74.5% #37/104, Terminal Bench Hard 37.9% #36/150, MMMU-Pro 73.8% #57/118, CritPt 5.1% #63/127, τ²-Bench 86.80%. All 5 DataLearner benchmarks match Vals AI's Terminal-Bench result. BenchLM has no page for this model (confirmed 404). Model retired 2026-07-23 (311 days in service). Normalized scores: Tool 65, Reasoning 70, Context 65, Multimodal 63, Coding 72, Overall 67.
