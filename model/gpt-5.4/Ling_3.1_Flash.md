# GPT-5.4 — findings by Ling 3.1 Flash

- Source: OpenAI (`opencode/gpt-5.4`; API `gpt-5.4` / `gpt-5.4-pro`; OpenAI API, ChatGPT, Codex)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4
- **Short description:** OpenAI's March-2026 flagship for complex professional work — the first general-purpose model with native SOTA computer use (OSWorld-Verified 75.0%, surpassing the 72.4% human baseline), GPQA Diamond 92.0%, MMLU-Pro 93%, SWE-bench 84% (ARMES-reported) — across a 1.05M context at $2.50/$15 per 1M; OpenAI's most token-efficient reasoning model to date (47% MCP Atlas token reduction from tool search).
- **Provider / access:** OpenAI API (reasoning effort none-default/low/medium/high/xhigh; most launch benchmarks at xhigh), ChatGPT (Thinking for Plus/Team/Pro; Pro for GPT-5.4 Pro), Codex (experimental 1M context via `model_context_window`); Batch/Flex at 50%, Priority at 2×. `noFreeId`.
- **Release / knowledge:** 2026-03-05; knowledge cutoff not captured.
- **IDs:** `opencode/gpt-5.4` / `gpt-5.4` / `gpt-5.4-pro` ($30/$180). NOTE: the repo `meta.json` is stale — it says "128K total" and "Text in/out"; the model has a 1,050,000-token window (128K out; 272K standard default in some surfaces) and takes text and image input (visual understanding documented; video not documented in the materials captured).
- **Context window:** 1,050,000 tokens in; 128,000 out (1M opt-in/experimental in Codex; standard 272K default; >272K prompts bill the whole session at 2× input and 1.5× output — $5/$22.50 extended).
- **Modalities:** text, image in; text out.
- **Pricing (as of 2026-10-02):** $2.50/$15.00 per 1M input/output; cached input $0.25/M (10%); Batch/Flex 50%; Priority 2×.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Vendor (OpenAI launch, 2026-03-05; xhigh unless noted):

- OSWorld-Verified (computer use): **75.0%** — launch SOTA, far above GPT-5.2's 47.3% and surpassing human performance (72.4%)
- MMMU-Pro (visual reasoning): **81.2%** (vs GPT-5.2's 79.5%)
- OmniDocBench: normalized error **0.109** (vs GPT-5.2's 0.140)
- τ²-Bench Telecom at `none` effort: **64.3%** (vs GPT-5.2's 57.2%)
- Knowledge work: across 44 occupations, matched or exceeded professionals in **83.0%** of comparisons
- Tool search (MCP Atlas, Scale's 36-server setup): **47% reduction** in total token usage
- SWE-bench, GPQA, AIME, LiveCodeBench, Terminal-Bench, DeepSWE: not in the captured launch materials

ARMES (independent harness, per ARMES docs; values as listed, configurations not fully specified):

- SWE-bench: **84%** (presumably Verified)
- GPQA Diamond: **92.0%**; MMLU-Pro: **93%**
- Humanity's Last Exam: **73.9%** — far above the ~40–55% frontier range; flagged as an unverified configuration and not adopted for scoring
- Also listed (values not captured): AA Intelligence Index, LCR v1.1, Terminal-Bench Hard, Terminal-Bench 2, LiveBench (2026-06-25), SWE-bench Pro Public, ApprenticeBench CUA, BullshitBench V1, GSO, MCP Atlas, MRCR v2 (8-needle), Surge Chartography, TAU-2 Bench

### Normalized scores (1–100)

- **Tool use: 80/100.** MCP Atlas 70.6% (Scale AI SEAL, verified, xhigh), Terminal-Bench 2.1 78.3% (AA, xhigh) / 81.8% (Terminal-Bench's own board, rank 2), OSWorld-Verified 75.0% (launch SOTA, past the 72.4% human baseline), BrowseComp 82.7%, CyberGym 79.0% and τ²-Bench Telecom 64.3% (even at `none` effort) lead, with 83.0% professional-parity across 44 occupations, a 47% MCP Atlas token reduction from tool search, Claw-Eval 60.3% and DeepSearchQA 73.6% supporting; Toolathlon 54.6% and APEX-Agents-AA 33.3% cap the score.
- **Reasoning: 80/100.** GPQA Diamond 92.8% (reported) / 92.0% (AA) and MMLU-Pro 93% are frontier-band, and HLE 52.1% (OpenAI's GPT-5.5 comparison table) reaches the frontier leader band; AA's own reads are cooler — HLE 43.7% (no-tools 39.8%), Intelligence Index 39.0 (xhigh, v4.3.2), LiveBench 78.0% — and AA-Omniscience (50.8% accuracy, 91.7% hallucination rate) is a marked weakness; ARMES's HLE 73.9% remains flagged as an unverified configuration and is not adopted.
- **Context window: 90/100.** 1.05M-token window (128K out; the 1M window is opt-in/experimental in Codex, with a standard 272K default and 2×/1.5× billing beyond 272K); no MRCR/RULER/AA-LCR figure captured, so 95+ is not justified.
- **Multimodal: 70/100.** text/image in with text out — the top of the +image-in band (60–70); MMMU-Pro 81.2% and OmniDocBench 0.109 normalized error (vs GPT-5.2's 0.140) support it; video input was not documented in the materials captured.
- **Coding: 79/100.** SWE-bench Verified 76.9% (Epoch AI, high) / 78.2% (vals.ai, xhigh) and SWE-bench Pro 59.1% (Scale AI SEAL — rank 2) lead, with LiveCodeBench Pro 87.5%, the AA Coding Index of 71.0, Vibe Code Bench 67.42% and SciCode 56.6% supporting; DeepSWE v1.1 51.8–56.0% (Epoch 51.8%, llm-stats 52.0%, RankedAGI 56.0%) sits well under the 74% frontier bar, and PostTrainBench 19.0% and the SWE Atlas sub-scores (40.8–44.4%) cap the score; the ARMES-reported SWE-bench 84% remains unverified.
- **Cost efficiency: 62/100.** $2.50/$15 per 1M (blended ~$5.63/M at 3:1) sits just above the ~$3/$15≈60 anchor; 10%-of-input cache reads ($0.25/M), half-rate Batch/Flex and the 47% MCP Atlas token reduction offset, while >272K prompts bill the whole session at 2× input/1.5× output ($5/$22.50).
- **Overall Score: 80/100.** (80+80+90+70+79)/5 = 79.8 → 80 — a March-2026 flagship whose native computer use (OSWorld 75.0%), MCP Atlas 70.6%, TB 2.1 78.3% and frontier-band reasoning (GPQA 92.0–92.8%, HLE 52.1% vendor / 43.7% AA) at $2.50/$15 hold up; DeepSWE 51.8–56.0%, the 91.7% omniscience hallucination rate and the 1.05M window's untested retrieval are the gaps.

---

## Update 2026-10-08 (6-day re-research)

Large independent set found (BenchLeader, BenchLM, Vector Wire/AA, RankedAGI, Traictory, Epoch AI):

- Agent / tool use: MCP Atlas **70.6%** (Scale AI SEAL, verified, xhigh; vendor self-report 67.2%) — fills the MCP Atlas gap; Terminal-Bench 2.1 **78.28%** (AA, xhigh) / **81.8%** (Terminal-Bench's own board, rank 2) — fills the TB 2.1 gap; Terminal-Bench 2.0 **75.1%** (self-computed, xhigh); BrowseComp **82.7%**; CyberGym **79.0%**; Toolathlon **54.6%**; Claw-Eval **60.3%** (leaderboard); DeepSearchQA **73.6%** (Muse Spark comparison chart); APEX-Agents-AA **33.3%**; JobBench 38.9%; Gert Labs 64.89%
- Reasoning / knowledge: HLE **52.1%** (OpenAI's GPT-5.5 comparison table) / **39.8%** no-tools (OpenAI) / **43.7%** (AA) — fills the HLE gap; GPQA **92.8%** (reported) / **92.0%** (AA); LiveBench **78.0%**; Epoch Capabilities Index **156.8** (rank 17); AA Intelligence Index v4.3.2 **39.0** at xhigh (27.6 low, 18.2 no-reasoning); AA-Omniscience Index 5.8%, Accuracy 50.8%, **Hallucination Rate 91.7%** — a marked weakness; HealthBench Hard 40.1%, HealthBench Professional 48.1%, MedXpertQA 59.6%
- Coding: SWE-bench Verified **76.9%** (Epoch AI, high, rank 8) / **78.2%** (vals.ai, xhigh, rank 30) — fills the SWE-bench gap; SWE-bench Pro **59.1%** (Scale AI SEAL, rank 2) / **57.7%** (OpenAI); DeepSWE v1.1 **51.8%** (Epoch, rank 46) / 52.0% (llm-stats) / 56.0% (RankedAGI) — fills the DeepSWE gap, well under the 74% bar; SciCode **56.6%** (rank 30); LiveCodeBench Pro **87.5%** (Muse Spark chart); Vibe Code Bench **67.42%** (vals.ai v1.1); AA Coding Index **71.0%**; PostTrainBench v1.1 **19.0%**; SWE Atlas sub-scores: Codebase QnA 40.8%, Refactoring 44.3%, Test Writing 44.4%; React Native Evals 85.3%; ResearchClawBench 15.3%; ExploitGym 6.0%; ApprenticeBench 11%
- **Scores revised**: Tool 76→80 (MCP Atlas 70.6%, TB 2.1 78.3%, BrowseComp 82.7%), Reasoning 79→80 (HLE 52.1% vendor / 43.7% AA, GPQA 92.0–92.8%), Coding 77→79 (SWE-bench Verified 76.9–78.2%, SWE-bench Pro 59.1% rank 2 — capped by DeepSWE 51.8–56.0%), Overall 78→80 ((80+80+90+70+79)/5 = 79.8)

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02 (updated 2026-10-08)
- Method: public internet research (OpenAI GPT-5.4 launch + API docs, ARMES docs, OpenAI Developer Community); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5_4.md`, using the same headings.
