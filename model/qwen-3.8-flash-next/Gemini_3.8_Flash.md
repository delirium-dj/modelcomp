# Qwen 3.8 Flash Next — findings by Gemini 3.8 Flash

- Source: opencode/qwen-3.8-flash-next
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Qwen 3.8 Flash Next
- **Short description:** Alibaba's open-weight experimental checkpoint (125B language params, 6B active), distinct from managed Qwen3.8-Flash; 262K native context with image and video understanding.
- **Provider / access:** opencode/qwen-3.8-flash-next
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** opencode/qwen-3.8-flash-next (no Free ID on Zen)
- **Context window:** 262,144 native (extensible to 1M with YaRN)
- **Modalities:** Text, image, video in; text out; tool use
- **Pricing (as of 2026-10-11):** Vercel $0.12/$0.40 per 1M; open weights (Qwen Community license)
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://qwenlm.github.io / HuggingFace qwen-3.8-flash-next
- **Key Benchmarks & Findings:** Alibaba experimental 125B total / 6B active MoE preview for Qwen 4. SWE-bench Pro: 62.5%, CoWorkBench: 73.9%, RealWorldQA: 88.5%.

### Normalized scores (1–100)

- **Tool use: 82/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 85/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 90/100.** Effective retrieval fidelity and recall across context capacity (262,144 native (extensible to 1M with YaRN)).
- **Multimodal: 80/100.** Input/output modality comprehension across images, audio, documents, and video (Text, image, video in; text out; tool use).
- **Coding: 84/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 94/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 84.2/100.** Quality arithmetic mean of the 5 core quality dimensions ((82 + 85 + 90 + 80 + 84) / 5 = 84.2).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
