# Union Alpha (Pareto 26.9) — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / Union Alpha
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Union Alpha — revealed as **Pareto 26.9** by Unbiased (Circuit & Chisel)
- **Short description:** Blended model that runs several frontier and open-source models on each request and keeps the best answer under one model string and one bill; appeared anonymously as OpenRouter `stealth/union-alpha` on 2026-09-16 and was named 33 hours later.
- **Provider / access:** Unbiased — OpenRouter (`unbiased/pareto`, OpenAI-compatible), Unbiased API (`pareto`, pay-as-you-go prepaid credits, manual account review), Cloudflare (old stealth ID documented; retired). The stealth ID `stealth/union-alpha` has no endpoints since 2026-09-17.
- **Release / knowledge:** Stealth launch 2026-09-16 14:42 UTC; revealed 2026-09-17 23:24 UTC. Model card version "Pareto 26.9". Knowledge cutoff undisclosed.
- **IDs:** `opencode/union-alpha` (repo meta.json, stale stub: "128K total", "Text in/out"); `stealth/union-alpha` (retired); `unbiased/pareto` (current).
- **Context window:** 262,144 tokens in / 131,072 out.
- **Modalities:** Text, image in; text out; tool calling (`tools`, `tool_choice`, `response_format`; no schema enforcement); no exposed reasoning control; tokenizer listed as "Other".
- **Pricing (as of 2026-10):** $2.50 input / $7.50 output per 1M tokens; $0.25 cached input. Free during the 33-hour preview window only.
- **Architecture:** blended composite — multiple models per request with a selection layer that scores candidate answers and returns the winner (Unbiased states it never switches models mid-conversation, so it is "not a router" by their definition).

### Raw benchmarks found

All five scores are from Unbiased's vendor model card (vendor-run; no task costs, no composite, no independent reproduction):

Agent / tool use:

- DeepSWE: **74** — three-way tie with GPT-6 Astra and DeepSeek 4.1 Flash (Claude Fable 5.1: 67).
- Terminal-Bench 4.0: **51** (Astra 58, Fable 5.1 56, DeepSeek 4.1 Flash 31).
- Terminal-Bench 2.1 / Tau3-Banking / MCP-Atlas / GDPval-AA: no verified public score found.

Reasoning / knowledge:

- HLE (no tools): **49** (Astra 54, Fable 5.1 55, DeepSeek 4.1 Flash 39).
- ArXivMath: **88** (Astra 91, Fable 5.1 72, DeepSeek 4.1 Flash 28).
- GPQA Diamond / AA Intelligence Index: no verified public score found.

Coding:

- DeepSWE: **74** (see above).
- SWE-bench Verified / LiveCodeBench / SciCode: no verified public score found.

Launch-day chart reads (unverified, from charts with no printed numbers): ~73% DeepSWE at ~$0.65/task (OpenRouter CEO's chart); ~52% Terminal-Bench v4.0 at ~$1.60/task (OpenCode chart). Launch claims of outperforming GPT-5.6 Sol on TB2.1/SWE-bench Verified are not on the model card and remain unscored.

Long context: no MRCR/RULER/GraphWalks score found; 256K window.

Multimodal:

- MMMU-Pro: **78** (Astra 87, Fable 5.1 81, DeepSeek 4.1 Flash 77).

### Normalized scores (1–100)

- **Tool use: 71/100.** DeepSWE 74 ties the frontier anchor, but Terminal-Bench 4.0 51 is mid-band and no TB2.1/MCP-Atlas/τ³ evidence exists; all scores are vendor-run on a blend.
- **Reasoning: 73/100.** HLE 49 (no tools) clears the 40% frontier anchor and ArXivMath 88 is strong; no GPQA or AA Index published.
- **Context window: 74/100.** 262K in / 131K out sits between the 200K=70 and 1M=95 anchors.
- **Multimodal: 65/100.** Text+image input (image band 60–70); MMMU-Pro 78 is solid but vendor-run image evidence.
- **Coding: 73/100.** DeepSWE 74 matches the frontier anchor; Terminal-Bench 4.0 51 and the absence of SWE-bench Verified / LiveCodeBench cap it.
- **Cost efficiency: 80/100.** $2.50/$7.50 per 1M ($0.25 cached) undercuts the $3/$15 anchor; blend pricing may hide per-model costs.
- **Overall Score: 71.2/100.** Mean of the five quality dimensions; a frontier-tied DeepSWE blend whose four other vendor scores trail the leaders, with zero independent verification and a blended-identity caveat.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03
- Method: public internet research (Exa web search); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
