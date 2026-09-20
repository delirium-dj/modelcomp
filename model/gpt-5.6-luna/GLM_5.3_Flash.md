# GPT-5.6 Luna — findings by GLM 5.3 Flash

- Source: OpenAI (`gpt-5.6-luna`)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna (cost-sensitive high-volume tier; no Free-tier wording)
- **Short description:** The nano-tier model of OpenAI's GPT-5.6 family (Sol / Terra / Luna lineup) — fast, low-cost workhorse for summarization, drafting, autocomplete and routine automation, with the full 1.05M context window and OpenAI's complete tool suite at $0.20/$1.20 per 1M.
- **Provider / access:** OpenAI API (`gpt-5.6-luna`), ChatGPT, Codex; also OpenRouter and 15+ routers/gateways. Not on OpenCode Zen (no Zen Free ID).
- **Release / knowledge:** Generally available July 9, 2026 across ChatGPT, Codex and the API. Knowledge cutoff February 16, 2026.
- **IDs:** `gpt-5.6-luna` (snapshots/aliases under the same ID). Siblings: `gpt-5.6-sol` (flagship), `gpt-5.6-terra`.
- **Context window:** 1,050,000 tokens / 128,000 max output — verified on the OpenAI API model page. >272K input prompts bill at 2x input / 1.5x output for the full request; cache writes at 1.25x input rate.
- **Modalities:** Text + image in; text out. Audio/video not supported. Reasoning: yes — effort none/low/medium (default)/high/xhigh/max. Tools: web search, file search, code interpreter, hosted shell, computer use, MCP, tool search, skills.
- **Pricing (as of 2026-09-19):** $0.20 in / $1.20 out per 1M; cached input $0.02 (90% discount); Batch 50%. Note: July 2026 listings showed $1.00/$6.00 (cache $0.10) — OpenAI subsequently cut Luna pricing ~5x per current docs. AA measures $0.18 per Intelligence Index task; blended $0.17/1M.
- **Architecture:** Proprietary, closed weights; parameters undisclosed (nano tier of the family).

### Raw benchmarks found

Agent / tool use:

- CursorBench 4.0 (max effort): **35.9** ($1.03/task, 87,284 tokens, 208 steps; Cursor vendor-reported, 2026-09-10)
- CursorBench 4.0 (high): **29.4** ($0.25); (xhigh): **33.0** ($0.44); (medium): **22.2** ($0.08); (low): **16.0** ($0.03)
- CursorBench 3.2 (medium): **47.7** ($0.39/task, 7,095 tokens, 28 steps); (low): **37.6** ($0.16) (Cursor, 2026-07-18)
- Artificial Analysis Intelligence Index: **37** at max, #4/176 in its class (class median 12; dominates its price tier)
- Full OpenAI tool suite supported: computer use, hosted shell, apply patch, MCP, skills
- Terminal-Bench / Tau / GDPval / Claw-Eval: no individual public rows surfaced for Luna this pass

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **37** (max) — well above its class median (12); behind flagship Sol (~60) and GPT-6 Astra (53)
- GPQA / HLE / MRCR / LCR: no individual public rows surfaced for Luna this pass
- Verbosity: 150M output tokens across the AA Index (somewhat verbose for its class); 161.8 tok/s (notably fast); TTFT 123.28s at max effort

Coding:

- CursorBench 3.2 (medium): **47.7** — vs Fable 5.1's 73.4 (#1 on the same bench); nano-tier coding, not frontier
- CursorBench 4.0 (max): **35.9** (see above)
- SWE-bench Verified / Pro / LiveCodeBench / SciCode / DeepSWE: no verified public score found for Luna specifically

Long context:

- 1.05M window with >272K surcharge; no MRCR/RULER retrieval numbers published

### Normalized scores (1–100)

- **Tool use: 62/100.** The full OpenAI tool suite (computer use, shell, MCP, skills) plus a class-leading AA Index #4/176 placement, but CursorBench 4.0 tops out at 35.9 and no individual tool-benchmark rows are published — mid band.
- **Reasoning: 66/100.** AA Index 37 is barely above the 20–35 mid band and #4/176 in its price class (median 12); flagships sit at 37–65.7 — scored just above the mid band for its class leadership.
- **Context window: 92/100.** 1.05M window (95–100 tier) with 128K output; docked for the >272K surcharge and zero published retrieval numbers.
- **Multimodal: 65/100.** Text+image in / text out — middle of the 60–70 image-in band; no audio/video.
- **Coding: 58/100.** CursorBench 3.2 47.7 (vs 73.4 for Fable 5.1) and CursorBench 4.0 35.9 at max — solid nano-tier coding, far from frontier; no SWE-bench rows.
- **Cost efficiency: 93/100.** $0.20/$1.20 with $0.02 cached input sits just under the ~$0.10/$0.20→97–99 anchor; $0.18/task (AA) and a ~5x price cut since July make it an exceptional value — docked a few points for max-effort verbosity (150M tokens) and the 123s TTFT at max.
- **Overall Score: 68.6/100.** (62+66+92+65+58)/5 = 68.6. Best fit: high-volume, cost-sensitive production work (summarization, drafting, routing, automation) that still needs a 1M window and image input — escalate to Sol/Terra or Astra for hard reasoning and coding.

---

## Signature

- Provided by: **GLM 5.3 Flash (zai/glm-5.3-flash)** — 2026-09-19
- Method: public internet research (fresh web search: OpenAI API model page, Artificial Analysis model page, LLMReference dossier with Cursor rows); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

