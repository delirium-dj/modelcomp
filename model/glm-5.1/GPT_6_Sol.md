# GLM-5.1 — findings by GPT 6 Sol

- Source: Z.AI (`zai-org/GLM-5.1`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.1.
- **Short description:** Z.AI's MIT open-weight text MoE for long-horizon agentic engineering and iterative coding; the vendor's positioning word “coding” is **not** a second checkpoint or `glm-5.1-coding` SKU ([release](https://z.ai/blog/glm-5.1), [weights](https://huggingface.co/zai-org/GLM-5.1)).
- **Provider / access:** `glm-5.1` on Z.AI's OpenAI-compatible `https://api.z.ai/api/paas/v4/chat/completions`; `zai-org/GLM-5.1` weights for self-hosted vLLM/SGLang. Coding Plan **may remap** legacy 5.1 requests to GLM-5.3; use direct API or pinned weights to study the exact 5.1 model ([Z.AI docs](https://docs.z.ai/guides/llm/glm-5.1), [current route caveat](https://www.therundown.ai/tools/glm-5-1)). No guaranteed Free ID.
- **Release / knowledge:** Vendor release **2026-04-07**; no verified fixed knowledge cutoff. A third-party index's April 1 date appears to describe early availability rather than the published announcement ([Z.AI](https://z.ai/blog/glm-5.1), [Vals](https://www.vals.ai/models/zai_glm-5.1)).
- **IDs:** `zai-org/GLM-5.1` weights; Z.AI `glm-5.1`; gateway `zai/glm-5.1`. `GLM-5` predecessor and later `GLM-5.2/5.3` are distinct; Coding Plan mapping is an access redirect, not retroactive 5.1 weights.
- **Context window:** **200K tokens** at Z.AI, **128K maximum output** as a separate cap inside the context window ([official overview](https://docs.z.ai/guides/llm/glm-5.1)).
- **Modalities:** Text in/out; tool calls, reasoning toggle, structured JSON and caching via host API. No native image/audio/video ([Z.AI docs](https://docs.z.ai/guides/llm/glm-5.1)).
- **Pricing (as of 2026-11-01):** Z.AI lists **$1.40 input / $0.26 cached input / $4.40 output per million** and limited-time free cache storage, not a free model tier ([official pricing](https://docs.z.ai/guides/overview/pricing)). MIT weights carry no per-token fee but the ~754B-parameter deployment requires a cluster.
- **Architecture:** Vendor/HF **754B total**, ~40B active MoE with sparse attention, MIT licensed. BF16 versus FP8 are precision variants ([HF card](https://huggingface.co/zai-org/GLM-5.1)).

### Raw benchmarks found

- **Agent/tool use:** Z.AI [τ³-Bench **70.6%**, MCP-Atlas public **71.8%**, Tool-Decathlon **40.7%**, BrowseComp **68.0%** without vs **79.3%** with context management](https://z.ai/blog/glm-5.1). The context-manager results are a **different harness**, not stronger bare weights. Independent [Vals Terminal-Bench 2.1 **56.93% ±1.35**](https://www.vals.ai/models/zai_glm-5.1); vendor Terminal-Bench **2.0 63.5%** Terminus-2 and **69.0%** Claude Code are different version/harness/budget ([vendor methodology](https://z.ai/blog/glm-5.1)).
- **Reasoning:** Z.AI [GPQA Diamond **86.2%**, AIME 2026 **95.3%**, HLE no-tools **31.0%**, with tools **52.3%**](https://z.ai/blog/glm-5.1). Independent [Vals GPQA **84.52% ±1.82**, MMLU-Pro **86.90% ±0.33**](https://www.vals.ai/models/zai_glm-5.1) and [AA GPQA **86.8%**, HLE **30.1%**](https://benchgap.net/model/glm-5-1) broadly support the no-tools vendor results; tool-enabled HLE uses another task setting.
- **Coding:** Vendor [SWE-bench Pro **58.4%** in OpenHands, NL2Repo **42.7%**, CyberGym **68.7%**](https://z.ai/blog/glm-5.1). Independently [Vals SWE-bench Verified **76.4% ±1.90** in a distinct suite, LiveCodeBench **81.38% ±1.06**, Vibe Code Bench **31.46% ±4.55**](https://www.vals.ai/models/zai_glm-5.1). SWE-Pro and SWE Verified are not the same benchmark; do not claim a 58.4 vs 76.4 contradiction.
- **Long context:** Independent [AA-LCR **73.7%**](https://benchlm.ai/models/glm-5-1); no independently pinned 200K near-cap retrieval accuracy was established. Z.AI's 8-hour agent examples are task-duration demonstrations, not a context measurement.
- **Multimodal:** No exact-model image/audio/video benchmark; the model is text-only.

### Normalized scores (1–100)

- **Tool use: 74/100.** Strong vendor MCP/τ³ and independent TB2.1 ~57, limited by different test budgets.
- **Reasoning: 77/100.** Independent GPQA ~85–87, but HLE without tools ~30.
- **Context window: 70/100.** 200K allowance and AA-LCR 73.7, no validated full-window recall.
- **Multimodal: 15/100.** Text-only I/O.
- **Coding: 77/100.** Independent SWE Verified 76.4 and LCB 81.4 support engineering quality; difficult migration/vibe tasks less reliable.
- **Cost efficiency: 58/100.** Paid direct API and costly large-weight deployment despite MIT reuse.
- **Overall Score: 63/100.** Half-up mean (74 + 77 + 70 + 15 + 77) / 5 = 62.6; strong text coding agents with provider-routing caution.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-11-01 UTC
- Method: Three fresh official, third-party and provider searches; benchmark versions/scaffolds and subscription remapping kept separate. Scores are normalized judgments.
- Reference URLs:
  - [Z.AI release, detailed benchmark settings](https://z.ai/blog/glm-5.1)
  - [Z.AI API model specification and endpoint](https://docs.z.ai/guides/llm/glm-5.1)
  - [Z.AI current direct-token pricing](https://docs.z.ai/guides/overview/pricing)
  - [Z.AI exact-model MIT weights](https://huggingface.co/zai-org/GLM-5.1)
  - [Vals independent exact-model benchmark runs](https://www.vals.ai/models/zai_glm-5.1)
- Future sources: add a new file next to this one using the same headings.
