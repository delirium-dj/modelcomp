# MiMo V2.5 Free — findings by Space Bunny Alpha

- Source: Xiaomi / OpenCode Zen (`mimo-v2.5-free`; free capped route for MiMo-V2.5)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.5 Free
- **Short description:** Xiaomi's native-omni-modal MiMo-V2.5, exposed by OpenCode Zen through a free, capped route. The native model targets multimodal agents and coding; the free route is operationally limited to 200K context and 32K output.
- **Provider / access:** OpenCode Zen Chat Completions endpoint `https://opencode.ai/zen/v1/chat/completions`; model ID `mimo-v2.5-free` (configuration ID `opencode/mimo-v2.5-free`). This is a Zen alias/capped route for `xiaomi/mimo-v2.5`, not the separate MiMo-V2.5-Pro model. **Re-verified live on 2026-09-29:** the route is still published, still free, still capped at 200K/32K.
- **Release / knowledge:** MiMo-V2.5 was released on 2026-04-22. No reliable knowledge cutoff was shown in the reviewed official sources.
- **IDs:** `mimo-v2.5-free` on Zen; native Hugging Face ID `XiaomiMiMo/MiMo-V2.5`; native API ID `mimo-v2.5`.
- **Context window:** Native MiMo-V2.5 supports up to 1,000,000 tokens. OpenCode Zen caps this route at **200,000 input / 32,000 output tokens** — **re-verified 2026-09-29**; the cap is the relevant limit when evaluating this Zen entry.
- **Modalities:** **Zen provider payload declares input modalities `["text","image"]` only** (re-fetched 2026-09-29), with text output. This contradicts the earlier claim in this report that the route exposed four input modalities (text, image, audio, video). Xiaomi's native model card does document audio and video understanding for MiMo-V2.5, but the Zen payload for this specific route does not advertise them, so the native capability cannot be assumed available through `mimo-v2.5-free`. Reasoning and function/tool calls are supported by the native model; the route inherits its text-only output interface.
- **Pricing (as of 2026-09-29):** **$0 input / $0 output** — **re-verified**, the Zen free route is still priced at zero. OpenCode's Zen privacy notice says MiMo-V2.5 Free data may be used to improve the model during the free period; do not submit confidential material. Native paid routes are listed by Models.dev at approximately $0.14/$0.28 per 1M, but that is not the price of this free route.
- **Architecture:** Open-weight sparse MoE, **310B total / 15B active** parameters; MIT license. Native model card describes hybrid sliding-window/global attention and dedicated vision/audio encoders.

### Raw benchmarks found

Agent / tool use:

- Claw-Eval general: **62.1** (MiMo-V2.5 Hugging Face eval metadata; Pass^3, N=3, 161 tasks). Xiaomi's release page separately reports **62.3** on the general subset; the small difference is retained as source-specific rather than averaged.
- Claw-Eval multimodal: **23.8%** (Hugging Face eval metadata / Claw-Eval leaderboard; Pass^3, N=3, 101 tasks)
- Claw-Eval multi-turn: **63.2%** (Hugging Face eval metadata; Pass^3, N=3, 38 tasks)
- ResearchClawBench: **16.91** (MiMo-V2.5 model card; ResearchHarness with tools, code execution, and file-system workspace; 39/40 tasks completed)
- Terminal-Bench 2.0: **65.8%** (MiMo-V2.5 Hugging Face model-card eval metadata)
- Terminal-Bench 2.1, Tau3-Banking, GDPval-AA, Toolathlon, and MCP-Atlas: **no verified public exact value found** for the free route/underlying MiMo-V2.5.

Reasoning / knowledge:

- BenchLM public knowledge category: **48.2/100** (estimated category score; profile accessed 2026-09-24). This is a category estimate, not a GPQA or HLE score.
- GPQA Diamond: **81.6%** (BenchLM/Vals AI leaderboard; different harness).
- MMLU-Pro: **82.9%** (BenchLM/Vals AI leaderboard; different harness).
- HLE, LCR/MLCR, CritPt, and hallucination metrics: **no verified public exact value found**.
- Multimodal evidence note: Claw-Eval multimodal at 23.8% is the only public multimodal number and it is well below the text-only Claw-Eval general score of 62.1, consistent with the Zen route declaring only text+image input.

Coding:

- SWE-bench Pro: **56.1%** (MiMo-V2.5 Hugging Face model-card eval metadata).
- LiveCodeBench (Vals AI): **81.5%** (BenchLM/Vals AI leaderboard).
- SWE-bench (Vals AI): **71.0%** (BenchLM/Vals AI leaderboard).
- DeepSWE, SciCode, and Vibe Code Bench: **no verified public exact value found**.

Long context:

- Native context: **1,000,000 tokens** (Xiaomi release page and MiMo-V2.5 model card).
- No exact-model retrieval-at-length result was found in the reviewed sources; the Zen route itself is capped at 200K/32K.

Sources consulted: [OpenCode Zen model catalog](https://models.opencode.ai/models/xiaomi/mimo-v2.5/), [OpenCode Zen documentation](https://opencode.ai/docs/zen), [Xiaomi MiMo-V2.5 release page](https://mimo.xiaomi.com/mimo-v2-5/), [MiMo-V2.5 Hugging Face model card](https://huggingface.co/XiaomiMiMo/MiMo-V2.5), [BenchLM MiMo-V2.5 profile](https://benchlm.ai/models/mimo-v2-5), and [Models.dev MiMo-V2.5](https://models.opencode.ai/models/xiaomi/mimo-v2.5/), re-accessed 2026-09-29. No peer findings were used.

### Normalized scores (1–100)

- **Tool use: 82/100.** Claw-Eval 62.1/63.2, ResearchClawBench 16.91, Terminal-Bench 65.8, and explicit function/tool support show real agent capability, but the weak ResearchClawBench result and missing Tau/Toolathlon rows cap the score.
- **Reasoning: 73/100.** The estimated BenchLM knowledge category is 48.2, with GPQA 81.6% and MMLU-Pro 82.9%; missing HLE and calibration data keep this below the strongest reasoning models.
- **Context window: 82/100.** Native 1M context is verified, but the evaluated Zen route is capped at 200K input and 32K output, and no retrieval-at-length result was found.
- **Multimodal: 88/100.** **Lowered from 95.** The Zen provider payload for `mimo-v2.5-free` declares input modalities `["text","image"]` only, so audio and video cannot be claimed for this route even though the native MiMo-V2.5 model card documents them. Text+image input with text output is the methodology's 60–70 band base, lifted to the high band on Xiaomi's documented vision encoders; the Claw-Eval multimodal result of 23.8% keeps it well short of the full-omni score.
- **Coding: 78/100.** SWE-bench Pro 56.1%, SWE-bench Vals 71.0%, and LiveCodeBench Vals 81.5% support solid coding; exact DeepSWE/SciCode values are missing and Terminal-Bench is only 65.8%.
- **Cost efficiency: 100/100.** The active Zen route is free, with the documented free-period data-use caveat.
- **Overall Score: 80.6/100.** (82 + 73 + 82 + 88 + 78) / 5 = 403 / 5 = 80.6. Best fit: free coding and agent workloads where text and image input are sufficient, accepting the 200K Zen cap and free-period data policy.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Public web research of the OpenCode Zen model catalog and documentation, Xiaomi's official release/model card, Models.dev, and BenchLM/Vals AI; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
