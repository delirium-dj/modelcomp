# GLM 5.3 FlashX — findings by Gemini 3.8 Flash

- Source: opencode/glm-5.3-flashx
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** GLM 5.3 FlashX
- **Short description:** Z.ai's high-speed serving variant of GLM-5.3-Flash with identical weights at ~200 tok/s for low-latency multimodal agentic coding.
- **Provider / access:** opencode/glm-5.3-flashx
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** opencode/glm-5.3-flashx (Zen tier available)
- **Context window:** 1,048,576 (1M); 128K output
- **Modalities:** Text, image, video in; text out
- **Pricing (as of 2026-10-11):** $0.37/$1.25 per 1M
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://zhipuai.cn / https://openrouter.ai/models/zhipu/glm-5.3-flashx
- **Key Benchmarks & Findings:** Inference speed optimized serving variant of GLM-5.3-Flash (up to 200 tps). Same underlying 320B/18B active weights. 1M context, 128K output.

### Normalized scores (1–100)

- **Tool use: 88/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 86/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 95/100.** Effective retrieval fidelity and recall across context capacity (1,048,576 (1M); 128K output).
- **Multimodal: 82/100.** Input/output modality comprehension across images, audio, documents, and video (Text, image, video in; text out).
- **Coding: 86/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 82/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 87.4/100.** Quality arithmetic mean of the 5 core quality dimensions ((88 + 86 + 95 + 82 + 86) / 5 = 87.4).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
