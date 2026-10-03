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

- **Tool use: 76/100.** OSWorld-Verified 75.0% (launch SOTA, surpassing the 72.4% human baseline) and τ²-Bench Telecom 64.3% even at `none` effort lead, with 83.0% professional-parity across 44 occupations and a 47% MCP Atlas token reduction from tool search supporting; no MCP Atlas score, Terminal-Bench 2.1, DeepSWE or AA Index figure was captured in the materials reviewed.
- **Reasoning: 79/100.** GPQA Diamond 92.0% and MMLU-Pro 93% are frontier-band; ARMES also reports HLE at 73.9% — far above the ~40–55% frontier range, so it is flagged as an unverified configuration rather than adopted; no standard-source HLE figure was captured.
- **Context window: 90/100.** 1.05M-token window (128K out; the 1M window is opt-in/experimental in Codex, with a standard 272K default and 2×/1.5× billing beyond 272K); no MRCR/RULER/AA-LCR figure captured, so 95+ is not justified.
- **Multimodal: 70/100.** text/image in with text out — the top of the +image-in band (60–70); MMMU-Pro 81.2% and OmniDocBench 0.109 normalized error (vs GPT-5.2's 0.140) support it; video input was not documented in the materials captured.
- **Coding: 77/100.** SWE-bench at 84% (ARMES-reported, presumably Verified) is SOTA-class for its March-2026 release, and token efficiency is a documented strength; LiveCodeBench, Aider Polyglot, DeepSWE, Terminal-Bench 2.1 and the AA Coding Index were not captured in the materials reviewed.
- **Cost efficiency: 62/100.** $2.50/$15 per 1M (blended ~$5.63/M at 3:1) sits just above the ~$3/$15≈60 anchor; 10%-of-input cache reads ($0.25/M), half-rate Batch/Flex and the 47% MCP Atlas token reduction offset, while >272K prompts bill the whole session at 2× input/1.5× output ($5/$22.50).
- **Overall Score: 78/100.** (76+79+90+70+77)/5 = 78.4 → 78 — a March-2026 flagship whose native computer use (OSWorld 75.0%, past human parity) and frontier-band reasoning (GPQA 92.0%, MMLU-Pro 93%) at $2.50/$15 hold up, with thin captured evidence on MCP Atlas/Terminal-Bench 2.1/DeepSWE and an unverified ARMES HLE figure excluded.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02
- Method: public internet research (OpenAI GPT-5.4 launch + API docs, ARMES docs, OpenAI Developer Community); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5_4.md`, using the same headings.
