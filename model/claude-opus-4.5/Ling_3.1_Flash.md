# Claude Opus 4.5 — findings by Ling 3.1 Flash

- Source: Anthropic (`anthropic/claude-opus-4.5`; API `claude-opus-4-5-20251101`; Claude API, Claude app, Amazon Bedrock, Google Cloud Vertex AI, Microsoft Foundry)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.5
- **Short description:** Anthropic's November-2025 Opus flagship — the launch SOTA for real-world software engineering (SWE-bench Verified 80.9%) and agents (MCP Atlas 62.3% vs 43.8% next best; τ²-Bench Retail 88.9%/Telecom 98.2%; OSWorld 66.3%; Terminal-Bench 2.0 59.3%) with GPQA Diamond 86.95% and HLE 43.4% (with tools), at a 67%-reduced $5/$25 per 1M; still active (retirement scheduled 2026-11-24), superseded by Opus 4.6–5.5.
- **Provider / access:** Anthropic API, Claude app, Amazon Bedrock, Google Cloud Vertex AI, Microsoft Foundry; 200K context, 64K max output; default effort high; evals run with 64K thinking budget, interleaved scratchpads, 5-trial averages (SWE-bench Verified: no thinking budget; Terminal-Bench: 128K).
- **Release / knowledge:** 2025-11-24 (model ID date 2025-11-01); knowledge cutoff May 2025.
- **IDs:** `anthropic/claude-opus-4.5` / `claude-opus-4-5-20251101`. `noFreeId`. (The repo `meta.json` is accurate: 200K, text/image in, $5/$25.)
- **Context window:** 200,000 tokens; 64,000 max output.
- **Modalities:** text, image in; text out.
- **Pricing (as of 2026-10-02):** $5.00/$25.00 per 1M input/output; cache read $0.50/M (10% of input); 5m cache write $6.25/M, 1h $10/M; Batch API $2.50/$12.50 (50% off); regional/multi-region cloud endpoints +10%; blended ~$10/M at 3:1.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use (system card, 64K thinking budget, 5-trial averages):

- SWE-bench Verified: **80.9%** — launch SOTA, beating Gemini 3 Pro and GPT-5.1
- MCP Atlas: **62.3%** (vs 43.8% next best — a large gap)
- τ²-Bench Retail: **88.9%**; τ²-Bench Telecom: **98.2%** — best in table
- OSWorld (computer use): **66.3%** (vs 61.4% / 44.4%) — "best model in the world for computer use" per Anthropic
- Terminal-Bench 2.0 (128K thinking budget): **59.3%** (58.1% w/ Codex) — best in table; Terminal-Bench Hard **44%** (highest of any model, per AA)
- SWE-bench Multilingual: leads **7 of 8** languages; Aider Polyglot: **+10.6pp** over Sonnet 4.5
- BrowseComp-Plus: significant jump (figure not captured); Vending-Bench: **+29%** over Sonnet 4.5
- CyberGym: **50.6%**
- Internal performance-engineering take-home exam: higher than any human candidate ever (2-hour limit) — anecdotal

Reasoning / knowledge:

- GPQA Diamond: **86.95%** (5-trial avg; 87.0% per RankedAGI)
- Humanity's Last Exam: **43.4%** with tools / **30.8%** without (RankedAGI; +11pp over Sonnet 4.5 per AA)
- ARC-AGI-2 (Verified): **37.6%** (vs 13.6% / 31.1% / 17.6%)
- MMMU (validation): **80.7%**; MMMLU: **90.8%**; MMLU-Pro: **89.5%** (ties Gemini 3 Pro at 90% per AA)
- AA Intelligence Index: **41.9** (current version; Anthropic's best scores yet across all 10 of its benchmarks at launch)
- RankedAGI Reasoning Score: **64.4%**; EnigmaEval: **11.9%**; SimpleQA net score: **0.09** (weak)
- LiveCodeBench: +16pp over Sonnet 4.5 (absolute figure not captured)

Long context / multimodal:

- AA-LCR: +8pp over Sonnet 4.5 (absolute figure not captured); 200K window
- MMMU 80.7% (above); no Video-MMMU figure captured

### Normalized scores (1–100)

- **Tool use: 80/100.** MCP Atlas 62.3% (vs 43.8% next best at launch), τ²-Bench Retail 88.9%/Telecom 98.2% and OSWorld 66.3% led their tables, SWE-bench Verified 80.9% was the launch SOTA and Terminal-Bench 2.0 59.3% led; an 11-month-old model now superseded by Opus 4.6–5.5, with MCP Atlas/OSWorld/TB well under the October-2026 frontier bands.
- **Reasoning: 78/100.** GPQA Diamond 86.95% and HLE 43.4% with tools (30.8% without) are near the frontier bands, with MMMU 80.7%, MMMLU 90.8% and MMLU-Pro 89.5% supporting; ARC-AGI-2 37.6%, the AA Intelligence Index of 41.9 (current version), SimpleQA net 0.09 and EnigmaEval 11.9% cap the score.
- **Context window: 70/100.** 200K-token window — the methodology's 70 anchor; no MRCR/RULER/AA-LCR absolute figure captured (AA reported an +8pp uplift over Sonnet 4.5).
- **Multimodal: 65/100.** text/image in with text out — the +image-in band (60–70); MMMU 80.7% supports.
- **Coding: 76/100.** SWE-bench Verified 80.9% (launch SOTA), SWE-bench Multilingual leading 7/8 languages and Aider Polyglot +10.6pp over Sonnet 4.5 support; LiveCodeBench's absolute figure and DeepSWE/Terminal-Bench 2.1/AA Coding Index were not captured, and Terminal-Bench 2.0 at 59.3% is under the current 85% bar.
- **Cost efficiency: 55/100.** $5/$25 per 1M (blended ~$10/M at 3:1) sits between the ~$3/$15≈60 and ~$10/$50≈30 anchors; 10%-of-input cache reads ($0.50/M) and half-rate Batch API ($2.50/$12.50) are offsets, and the 67% cut from Opus 4.1 ($15/$75) is context.
- **Overall Score: 74/100.** (80+78+70+65+76)/5 = 73.8 → 74 — the November-2025 agentic SOTA (MCP Atlas 62.3%, OSWorld 66.3%, SWE-bench Verified 80.9%, HLE 43.4% w/tools) whose 200K window, $5/$25 pricing and 11-month age keep it below the October-2026 frontier.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02
- Method: public internet research (Anthropic Opus 4.5 launch + system card, Artificial Analysis, RankedAGI, BenchmarkList, DataCamp); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Opus_4_5.md`, using the same headings.
