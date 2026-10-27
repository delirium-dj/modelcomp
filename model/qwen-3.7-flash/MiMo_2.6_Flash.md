# Qwen 3.7 Flash — findings by MiMo 2.6 Flash

- Source: Alibaba/Qwen `qwen-3.7-flash`
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Flash (`qwen-3.7-flash`) — the low-cost, latency/cost-oriented tier of Alibaba's Qwen 3.7 API family (Flash / Plus / Max), a hybrid-thinking vision-language reasoning model positioned for multimodal agents, visual document work, search, and computer-use style interaction.
- **Short description:** Launched 2026-07-27 alongside Qwen3.7-Max as the "cheap tier" answer to Gemini 3.5 Flash — 1M context, vision (and video per most sources), tool calling, switchable thinking, at $0.03/$0.13 under 32K. Official Qwen messaging: the 3.7-Flash line "comprehensively enhances multimodal understanding and Agent execution vs 3.6-Flash." Independent reviews are cool: eesel's verdict "Flash means cheap, not fast" — 8.88% tool-call error rate, P99 up to 90s, and exactly one eval ranking it 22nd of 23.
- **Provider / access:** Alibaba Cloud Model Studio (DashScope) as `qwen3.7-flash`; OpenRouter `qwen/qwen3.7-flash`; single-provider hosting (eesel: "exactly one provider serves it, no fallback routing"); Roboflow Workflows endpoint. Weights closed — API only (Spheron, BenchLM).
- **Release / knowledge:** 2026-07-27 (OpenRouter listing date; BenchLM, oflight, DFO all agree); snapshot `qwen3.7-flash-20260727` (pinned `qwen3.7-flash-2026-07-15` per earlier Qwen-family research). Training cutoff not published for the Flash tier.
- **IDs:** `qwen3.7-flash` (Model Studio), `qwen/qwen3.7-flash` (OpenRouter), Roboflow `qwen/qwen3-7-flash`.
- **Context window:** 1,000,000 input / 65,536 max output / 262,144 thinking-token budget (oflight, Spheron, BenchLM, QwenCloud docs — all agree).
- **Modalities:** **conflict:** BenchLM, Spheron, DFO, QwenCloud list text + image + **video** input; oflight explicitly states "does not accept video input"; Roboflow describes interleaved text+image only. Majority (incl. official-lineage docs) says video accepted; both reported. Output: text only. Switchable thinking (`enable_thinking`, default on), function calling, built-in tools, structured output, prompt caching (BenchLM, QwenCloud).
- **Pricing (as of 2026-10-27):** tiered by context length (oflight, Alibaba pricing page): **$0.03 in / $0.13 out** (<32K), **$0.10/$0.40** (32K–256K), **$0.20/$0.80** (256K–1M) per 1M. OpenRouter blended ~$0.044/$0.149; 61 t/s p50. ~6.25×/8.65× cheaper than Qwen3.6-Flash at list. No open-weight alternative at this tier.
- **Architecture:** proprietary, undisclosed parameters/architecture (Spheron, oflight).

### Raw benchmarks found

Agent / tool use:

- **No agentic benchmark (Terminal-Bench, Tau, GDPval, Toolathlon) published.** eesel's provider panel: **tool-call error rate 8.88%** vs 6.45% for Qwen3.7-Plus — ~1 in 11 tool calls fails on a model sold for agent work; P99 latency stretches to **90 seconds**; single-provider dependency (eesel).
- Roboflow Vision Evals (computer-vision task mix): average **61.7%**, **#22 of 23** models benchmarked; per-task: OCR 84.1 (dead last of 23 per eesel's reading of the panel), identification 84.4 (#10), object detection/counting/reasoning at field medians; $0.0001/sample (#3 cheapest of 63), 5.8s/sample avg (#6 fastest) (Roboflow playground).

Reasoning / knowledge:

- **Epoch AI FrontierMath Tiers 1–3: 19.3%** (285 private problems) — the ONLY capability benchmark of any kind published for this model (BenchLM, Epoch AI). BenchLM score 47.1, unranked ("one math result can't rank a model").
- No GPQA/HLE/AIME figures found. Qwen3.7-Max (sibling flagship) posts HLE 41.4 — not transferable to Flash.

Coding:

- No SWE-bench/LiveCodeBench/Terminal-Bench figure found; Qwen positions it for "visual coding" and screen understanding but publishes nothing (BenchLM, DFO).

Long context:

- 1M window declared; **no MRCR/RULER retrieval measurement found** (BenchLM: "the sources establish the API shape... none includes a benchmark table").

### Normalized scores (1–100)

- **Tool use: 56/100.** Function calling, built-in tools, structured output and explicit agent positioning exist, but no agentic benchmark backs it, the 8.88% tool-call error rate is worse than its own Plus sibling, P99 hits 90s, and its only independent eval ranks it 22nd of 23 — the numbers eesel summarizes as fine for bulk tagging, not for customer-facing agent loops.
- **Reasoning: 50/100.** The single verified data point is Epoch's FrontierMath Tiers 1–3 at 19.3% — real but modest (frontier flagships sit 40+); no GPQA/HLE/AIME ever published; "enhanced reasoning vs 3.6-Flash" is official marketing without a table behind it.
- **Context window: 85/100.** 1M input / 65K output clears the top tier on paper, with tiered pricing that makes long inputs affordable; held below 90 because zero retrieval accuracy (MRCR/RULER) has been measured, and long-context pricing quadruples above 256K.
- **Multimodal: 68/100.** Native vision (video per majority of sources — one source disputes it) with switchable thinking for perception tasks; but Roboflow's vision eval average of 61.7% (#22/23) with OCR ranked dead last shows the multimodal "enhancement" doesn't yet beat the field, and output is text-only.
- **Coding: 50/100.** No coding benchmark of any kind exists; "visual coding" and screen-understanding positioning is unverified, and the tool-reliability problems (8.88% error rate) directly undermine coding-agent use.
- **Cost efficiency: 93/100.** $0.03/$0.13 under 32K (blended ~$0.044 on OpenRouter), 3rd cheapest of 63 on Roboflow's cost lane, 6–9× cheaper than the prior Flash generation — near the floor of what any hosted frontier-lineage model charges; docked slightly because the >256K tiers ($0.20/$0.80) erode the advantage on the very long-context workloads the 1M window invites.
- **Overall Score: 62/100.** (56 + 50 + 85 + 68 + 50) / 5 = 61.8 → 62 — best fit: high-volume cheap multimodal classification/OCR-lite/document tagging and short-context chat where per-token cost dominates quality; not the pick for customer-facing agent loops, hard reasoning, coding, or trusted long-context retrieval.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi MiMo-V2.6-Flash)** — 2026-10-27
- Method: public internet research — official Qwen/Alibaba sources first (Qwen3.7 series announcement and pricing page, QwenCloud model docs, Epoch AI FrontierMath run), then independent sources (BenchLM model card, eesel hands-on review with provider-panel reliability data, Roboflow Vision Evals playground, OpenRouter, oflight, Spheron, DFO/Design for Online); the video-input conflict is documented side by side. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
