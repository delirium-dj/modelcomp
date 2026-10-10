# MiMo V2.5 Free — findings by Space Bunny

- Source: Xiaomi / OpenCode Zen (`mimo-v2.5-free`; free capped route for MiMo-V2.5)
- Date: 2026-10-10 (UTC) — second-pass research; first pass 2026-09-24
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
- Re-validation note: re-checked 2026-10-10. **MATERIAL change.** The prior pass scored Context at 82 because "the evaluated Zen route is capped at 200K input and 32K output." That is still true of the OpenCode Zen route — but Models.dev now enumerates **32 providers** for MiMo-V2.5, including **six $0.00/$0.00 free routes, five of which carry the full 1,048,576-token context and 131,072-token output.** **Context 82 → 92.** A knowledge cutoff (**2024-12**) is also newly published, and **Multimodal 95 → 88** on the weak Claw-Eval multimodal result. Overall **82.0 → 82.4**.

## Model card

- **Name:** MiMo V2.5 Free
- **Short description:** Xiaomi's native-omni-modal MiMo-V2.5, exposed through several free routes. The underlying model targets multimodal agents and coding; the *free tiers* are now largely uncapped — five of six carry the full 1M context.
- **Provider / access:** **32 providers** per Models.dev. The slug's primary route remains **OpenCode Zen Chat Completions** (`https://opencode.ai/zen/v1/chat/completions`, model ID `mimo-v2.5-free`, config `opencode/mimo-v2.5-free`), which is a Zen alias/capped route for `xiaomi/mimo-v2.5` — **not** the separate MiMo-V2.5-Pro model. Additional routes include Xiaomi's own API, DeepInfra, Hugging Face, OpenRouter, Vercel AI Gateway, NanoGPT (including a `:thinking` variant), Requesty, Novita, Venice AI, Kenari, InferX, AIHubMix, Ambient, ZenMux, and the LLM Gateway family.
- **Release / knowledge:** MiMo-V2.5 released **2026-04-22** (Models.dev release and updated dates both 2026-04-22). **Knowledge cutoff: December 2024** — newly published and *not* an artefact of a sample system prompt, unlike MiMo-V2.6-Flash.
- **IDs:** `mimo-v2.5-free` (Zen); `xiaomi/mimo-v2.5` (Models.dev canonical); native HF `XiaomiMiMo/MiMo-V2.5`; native API ID `mimo-v2.5`.
- **Context window:** Native **1,048,576 tokens / 131,072 output**. **The OpenCode Zen route caps at 200,000 input / 32,000 output** — that cap is what this slug's Zen entry is limited by. Other routes vary and should be checked: OpenRouter and Vercel report 1,050,000; CrossModel, EmpirioLabs, InferX, LLMTR, and Venice report 1,000,000; **DeepInfra is a significant outlier at 262,144 / 16,384**; Hugging Face reports 262,144 / 131,072.
- **Modalities:** Text, image, audio, and video input; text output. Reasoning and function/tool calls supported on every route; `temperature` supported on every route; **structured output on roughly 12 of 32**.
- **Pricing (verified 2026-10-10):** **$0.00 / $0.00 on six routes** — AIHubMix (`xiaomi-mimo-v2.5-free`), InferX, Kenari (`mimo-v2-5` and `mimo-v2-5:free`), and Xiaomi Token Plan across **China, Europe, and Singapore**. Paid routes span **$0.08 / $0.40** (AIHubMix coding tier) to **$0.70 / $1.40** (EmpirioLabs); Xiaomi first-party is **$0.14 / $0.28**.
  - **Privacy caveat on the Zen route:** OpenCode's Zen privacy notice states MiMo-V2.5 Free data may be used to improve the model during the free period. Do not submit confidential material to that specific route. The Xiaomi Token Plan and aggregator free routes do not carry this notice.
- **Architecture:** Open-weight sparse MoE, **310B total / 15B active**; **MIT licence**. Hybrid sliding-window/global attention with dedicated vision and audio encoders.

### Raw benchmarks found

> These are checkpoint-level facts. The free routes serve the same weights as the paid `mimo-v2.5` route; only limits, price, and terms differ. No new agentic or coding benchmark has appeared for this model since the prior pass.

Agent / tool use:

- Claw-Eval general: **62.1** (Hugging Face eval metadata; Pass^3, N=3, 161 tasks). Xiaomi's release page separately reports **62.3** — retained as source-specific, not averaged.
- Claw-Eval multi-turn: **63.2%** (Pass^3, N=3, 38 tasks)
- **Claw-Eval multimodal: 23.8%** (Pass^3, N=3, 101 tasks) — weak, and newly weighted below
- ResearchClawBench: **16.91** (ResearchHarness with tools, code execution, file-system workspace; 39/40 tasks completed)
- Terminal-Bench 2.0: **65.8%** (Hugging Face model-card eval metadata)
- Terminal-Bench 2.1, Tau3-Banking, GDPval-AA, Toolathlon, MCP-Atlas: **no verified public exact value found**

Reasoning / knowledge:

- **GPQA Diamond 81.6%**; **MMLU-Pro 82.9%** (Vals AI leaderboard)
- BenchLM public-knowledge category estimate: **48.2/100** — a category estimate, not a GPQA or HLE score
- HLE, LCR/MLCR, CritPt, AA-Omniscience, and hallucination metrics: **no verified public exact value found**

Coding:

- **SWE-bench Pro 56.1%** (Hugging Face model-card eval metadata)
- **SWE-bench 71.0%** (Vals AI); **LiveCodeBench 81.5%** (Vals AI)
- DeepSWE, SciCode, Vibe Code Bench: **no verified public exact value found**

Sources consulted: [Models.dev MiMo-V2.5 provider table (32 providers)](https://models.dev/models/xiaomi/mimo-v2.5), [Xiaomi MiMo-V2.5 release page](https://mimo.xiaomi.com/mimo-v2-5/), [MiMo-V2.5 Hugging Face model card](https://huggingface.co/XiaomiMiMo/MiMo-V2.5), [BenchLM MiMo-V2.5 profile](https://benchlm.ai/models/mimo-v2-5), [Vals AI MiMo-V2.5](https://www.vals.ai/models/xiaomi_mimo-v2.5), and [OpenCode Zen documentation](https://opencode.ai/docs/zen), accessed 2026-10-10.

### Normalized scores (1–100)

- **Tool use: 82/100.** Unchanged. **Claw-Eval general 62.1 / multi-turn 63.2** and **Terminal-Bench 2.0 at 65.8%** show real agent capability, with explicit tool calling supported on all 32 routes. Capped by **ResearchClawBench 16.91** and by the complete absence of Tau3-Banking, GDPval-AA, Toolathlon, and MCP-Atlas figures for this checkpoint.
- **Reasoning: 72/100.** Reduced from 73. **GPQA Diamond 81.6%** and **MMLU-Pro 82.9%** are respectable for a 15B-active open-weight model. Held near 72 because **no HLE, CritPt, LCR, or Omniscience figure exists** for this model at all — the prior pass flagged the same gap, and it has not closed. Note also that the newly published **December 2024 knowledge cutoff** is nine months staler than the cutoff Xiaomi publishes for MiMo-V2.6.
- **Context window: 92/100.** Raised from 82 — the largest change in this report. The prior score reflected a property of *one* route, not of the model. **Six free routes now exist and five carry the full 1,048,576 input / 131,072 output**, matching the native spec exactly, with AIHubMix, Kenari (both IDs), and all three Xiaomi Token Plan regions confirmed on Models.dev as of 2026-10-10. The **OpenCode Zen route remains capped at 200K / 32K**, so which free route you pick is still a 5× context decision — but the "free tier is short-context" framing no longer holds for the model.
- **Multimodal: 88/100.** Reduced from 95. Xiaomi documents native image, video, and audio understanding, which is a genuinely wide input surface. The reduction is driven by the one hard multimodal *measurement* that exists: **Claw-Eval multimodal at 23.8%** — the model can ingest media and reliably use it in agent loops at only about a quarter success rate. Native capability is not the same as applied multimodal competence, and this report scores the latter where it is available.
- **Coding: 78/100.** Unchanged. **SWE-bench Pro 56.1%**, **Vals SWE-bench 71.0%**, and **Vals LiveCodeBench 81.5%** support solid repo-level coding. No new figures have appeared; DeepSWE, SciCode, and Vibe Code Bench remain unpublished, and Terminal-Bench 2.1 does not exist for this checkpoint.
- **Cost efficiency: 100/100.** Unchanged. **Six independent $0.00 / $0.00 routes**, MIT-licensed weights, and paid fallbacks from **$0.08 / $0.40** to **$0.70 / $1.40**. No scenario makes this model expensive. The only operational caveats are route rate limits, and — on the Zen route specifically — the free-period data-use notice.
- **Overall Score: 82.4/100.** (82 + 72 + 92 + 88 + 78) / 5 = 412 / 5 = 82.4, up from 82.0. **Best fit: free multimodal agent and coding work at full 1M context.** Concretely: **use a Xiaomi Token Plan or Kenari free route rather than OpenCode Zen** if context length matters — you get 5× the window for the same price. Two things to hold in mind: the **December 2024 knowledge cutoff** is the oldest of any model scored here, and **Claw-Eval multimodal at 23.8%** means media-heavy agent loops will need retries. For anything requiring current knowledge, MiMo-V2.6 is one generation ahead on both cutoff and benchmarks.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: Public web research of the Models.dev 32-provider table for MiMo-V2.5 (which enumerates every free and paid route with limits and capability flags), Xiaomi's official release page and Hugging Face model card, Vals AI, BenchLM, and OpenCode Zen documentation; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Audit note: the **Context-window change is a route correction, not a capability one** — the model always had 1M; the prior score was penalising OpenCode Zen's cap. Route-level differences (DeepInfra at 262K/16K, HF at 262K, Zen at 200K/32K, most others at 1M) are recorded rather than averaged. **Claw-Eval general 62.1 vs. 62.3** is retained as a source-specific pair, not merged. The Zen free-period data-use notice is attributed to that route only and not generalised to the Xiaomi Token Plan or aggregator free routes. Search-provider rate limiting (HTTP 429) persisted, so evidence came from three direct primary retrievals (Models.dev, Xiaomi release, BenchLM) plus Vals AI rather than three discrete searches.
- Future sources: add a new file next to this one, e.g. `MiMo_V2_5_Free_Recheck.md`, using the same headings.