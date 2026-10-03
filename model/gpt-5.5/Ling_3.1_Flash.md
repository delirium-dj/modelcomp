# GPT 5.5 — findings by Ling 3.1 Flash

- Source: OpenAI (`openai/gpt-5.5`; API `gpt-5.5`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.5
- **Short description:** OpenAI's fully retrained agentic model (launched 2026-04-23) — strongest agentic coding model at launch (Terminal-Bench 2.0 82.7% SOTA with Codex CLI, SWE-bench Verified 82.6% via Vals' independent harness), GPQA Diamond 93.6%, HLE 52.2% with tools; GPT-5.5 Pro ($30/$180) is the higher tier.
- **Provider / access:** OpenAI API (Responses and Chat Completions), ChatGPT (Plus/Pro/Business/Enterprise), Codex (Plus/Pro/Business/Enterprise/Edu/Go, 400K context), OpenRouter, Vercel AI Gateway, AWS Bedrock ($5.50/$33); reasoning effort none/low/medium/high/xhigh; Fast mode at 1.5x speed for 2.5x cost. No Zen Free ID (`noFreeId`).
- **Release / knowledge:** 2026-04-23; knowledge cutoff December 2025.
- **IDs:** `openai/gpt-5.5`. NOTE: the repo `meta.json` is an unverified stub ("No verified public value" for context/modalities/pricing) — the specs below are from OpenAI's launch and API docs.
- **Context window:** 1,050,000 (1.05M) tokens via the API (400K in Codex); prompts above 272K input incur a long-context surcharge (full session at 2x input / 1.5x output, per the GPT-5.4-family pattern).
- **Modalities:** multimodal (text and image in; text out) per LLM Reference; no audio/video input documented.
- **Pricing (as of 2026-10-02):** $5.00/$30.00 per 1M input/output; Batch/Flex $2.50/$15.00; Priority 2.5x; cache read $0.50/M; `gpt-5.5-pro` $30/$180.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use (OpenAI launch unless noted):

- Terminal-Bench 2.0: **82.7%** (Codex CLI scaffold) — SOTA at launch (vs GPT-5.4 75.1%, GPT-5.3-Codex 69.4%); Terminal-Bench 2.1: **78.2%** (LLM Reference, 2026-06-18) / **76.4%** (Vals) / **79.4%** (VectorWire)
- BrowseComp: **84.4%**
- MCP Atlas: **75.3%**
- OSWorld-Verified (computer use): **78.7%** (OSWorld 2.0: 13.0% — new version)
- τ²-bench: **98%**
- Toolathlon: **55.6%**
- GDPval: **84.9%** (win-or-tie rate); GDPval-AA: **1396 Elo** / **41.8%** (AA's own run)
- AA Agentic Index: **37.3%**; APEX-Agents-AA: **37.7%**; AA ITBench: **45.8%**; AA-AnalystAgent: **50.0%**
- CyberGym: **81.8%**; Gert Labs: **72.93%**; JobBench: **42.7%**; ResearchClawBench: **17.0%**; ExploitGym: **13.4%**; ApprenticeBench: **20%**
- Claw-Eval / ClawProBench / Agents' Last Exam: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (AA: 93.5%; Vals: 93.2%)
- Humanity's Last Exam (with tools): **52.2%** (AA: 45.8%); (no tools): **41.4%**
- AA Intelligence Index: **38.4** (new TB4.0/AutomationBench-heavy revision)
- AA-Omniscience: Index **20.5%**, Accuracy **58.0%**, Hallucination Rate **89.0%** — a weakness
- MMLU-Pro: **88.1%**; MMMU-Pro: **88.3%** (Vals); Chatbot Arena: **1488** (High); Instruction-Following: **92.1%**

Coding:

- SWE-bench Verified: **82.6%** (Vals AI independent harness; #8 of 81; vs GPT-5's 74.9%)
- SWE-bench Pro: **58.6%** (vs GPT-5.4's 57.7%)
- LiveCodeBench (Vals): **85.3%**
- AA Coding Index: **74.9%** — clears the 70% reference
- AA-SciCode: **55.8%** — clears the 55% reference
- Vibe Code Bench v1.1: **69.85%** (Vals); HumanEval: **94.2%** (saturated); React Native Evals: **84.7%**
- CursorBench 3.1: **59.2%** / 3.2: **58.4%**; FrontierCode 1.1 Main: **43.0%**; PostTrainBench v1.1: **27.2%**
- Expert-SWE (OpenAI internal; long-horizon coding, median human completion ~20 hours): outperforms GPT-5.4 (figure not published)
- DeepSWE: no verified public score found

Long context / multimodal:

- 1.05M-token window; AA-LCR not separately captured (component of the AA Index); no MRCR/RULER/GraphWalks score published
- MMMU-Pro 88.3% (Vals) is the vision-data point; no MMMU/Video-MMMU figure captured

### Normalized scores (1–100)

- **Tool use: 83/100.** Terminal-Bench 2.0 82.7% was launch-era SOTA, and BrowseComp 84.4%, τ²-bench 98% and GDPval 84.9% wins-or-ties are strong, but Terminal-Bench 2.1 76.4–79.4% (under the 88% frontier bar), MCP Atlas 75.3%, OSWorld-Verified 78.7%, Toolathlon 55.6% and the AA Agentic Index of 37.3 cap the score.
- **Reasoning: 85/100.** GPQA Diamond 93.6% clears the 90%+ frontier bar near the top and HLE 52.2% with tools (41.4% without) clears the 40%+ bar in the frontier's lower band; the AA Intelligence Index of 38.4 (new agentic-heavy revision) and AA-Omniscience (58.0% accuracy, 89.0% hallucination) are caveats.
- **Context window: 95/100.** 1.05M-token window (400K in Codex); no ≥98% retrieval-at-512K+ figure, so 100 is not justified.
- **Multimodal: 65/100.** text/image in with text out (multimodal per LLM Reference; MMMU-Pro 88.3%) — the +image-in band (60–70); no audio/video input documented.
- **Coding: 83/100.** SWE-bench Verified 82.6% (Vals, #8 of 81) and LiveCodeBench 85.3% are strong, and the AA Coding Index of 74.9% and AA-SciCode of 55.8% clear their 70%/55% references, but Terminal-Bench 2.1 76.4–79.4% (under the 85% bar), SWE-bench Pro 58.6% (mid-tier), Vibe Code Bench 69.85% and FrontierCode 43.0% cap the score; DeepSWE unpublished.
- **Cost efficiency: 49/100.** $5/$30 per 1M interpolates to ~49 between the ~60 ($3/$15) and ~30 ($10/$50) references; Batch/Flex at half rate (~60) and cache reads at $0.50/M are offsets; Fast mode (2.5x cost) and the >272K surcharge are premiums.
- **Overall Score: 82/100.** (83+85+95+65+83)/5 = 82.2 → 82 — a strong April-2026 agentic model (TB2.0 SOTA 82.7%, SWE-bench Verified 82.6%, GPQA 93.6%) now mid-pack on the 2026 agentic boards (TB2.1 ~78%, AA Index 38.4), with text-only multimodal and a $5/$30 list price as the trade-offs.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02
- Method: public internet research (OpenAI GPT-5.5 launch, LLM Reference, BenchLM, VectorWire, AnotherWrapper); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5_5.md`, using the same headings.
