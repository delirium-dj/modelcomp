# Ox Alpha — findings by GPT 6 Astra

- Source: Z.ai / GLM-5.3-Flash, formerly Ox Alpha
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** Ox Alpha; disclosed identity GLM-5.3-Flash.
- **Short description:** Anonymous preview name for Z.ai's multimodal model. [Official documentation](https://docs.z.ai/guides/vlm/glm-5.3-flash) explicitly confirms the identity; this report evaluates the disclosed model, not an independently preserved preview checkpoint.
- **Provider / access / IDs:** Preview was served through OpenCode and OpenRouter. Current model `glm-5.3-flash`; the [OpenCode Ox Alpha page](https://opencode.ai/data/unknown/ox-alpha) now labels it GLM-5.3-Flash. No continuing free Ox Alpha endpoint verified. Current API integration is Chat Completions compatible.
- **Release / knowledge:** August 2026 according to OpenCode; exact preview date and knowledge cutoff not verified.
- **Context window:** 1M; OpenCode lists approximately 131K maximum output.
- **Modalities:** Text, image, video and PDF input; text output. Reasoning and agent tools supported. [OpenCode specification](https://opencode.ai/data/unknown/ox-alpha), [vendor overview](https://docs.z.ai/guides/vlm/glm-5.3-flash).
- **Pricing (2026-10-04):** Current paid successor USD 0.15 input / 0.50 output per million tokens, per OpenCode; historical free-preview access is not assumed to remain available. Cache pricing is provider-dependent.
- **Architecture:** 320B total / 18B active, sparse/linear attention; MIT weights. [Vendor architecture discussion](https://autoclaw.z.ai/blog/model/glm-5.3-flash/), [AA model profile](https://artificialanalysis.ai/models/glm-5-3-flash).

### Raw benchmarks found

Measurements below are for the officially identified GLM-5.3-Flash model. They establish present disclosed-model capability, not bitwise identity of every historical anonymous deployment.

Agent / tool use:

- Vendor Terminal-Bench 2.1 **84.3%**, Toolathlon Verified **78.4%**, AutomationBench v1.0.6 **48.8%**, Agents' Last Exam **26.3%**. [Vendor evaluation](https://autoclaw.z.ai/blog/model/glm-5.3-flash/).
- Independent GDPval-AA v2.1 **1647 Elo**, AutomationBench-AA **60%**, Terminal-Bench 4.0 **33%**. [AA Flash column](https://artificialanalysis.ai/models/comparisons/glm-5-3-flash-vs-glm-5-2).
- Tau3/Tau2, Claw-Eval and MCP-Atlas: no verified public score found.

Reasoning / knowledge:

- AA Intelligence Index **42**, HLE **40%**, CritPt **15%**, Omniscience **7** (composite). [AA](https://artificialanalysis.ai/models/comparisons/glm-5-3-flash-vs-glm-5-2).
- Vendor HLE with tools **55.3%**. [Vendor](https://autoclaw.z.ai/blog/model/glm-5.3-flash/).
- GPQA Diamond: no verified public score found in the retrieved primary evidence.

Coding:

- DeepSWE v1.1 **63.4%**, NL2Repo **56.3%**, vendor-reported. [Vendor](https://autoclaw.z.ai/blog/model/glm-5.3-flash/).
- SciCode **52%**, independent. [AA](https://artificialanalysis.ai/models/comparisons/glm-5-3-flash-vs-glm-5-2).
- SWE-bench Verified/Pro, LiveCodeBench and Vibe Code Bench: no verified public score found.

Long context:

- AA-LCR v1.1 **80%**; full-window MRCR/RULER: no verified public score found. [AA](https://artificialanalysis.ai/models/comparisons/glm-5-3-flash-vs-glm-5-2).

### Normalized scores (1–100)

- **Tool use: 88/100.** Strong disclosed-model terminal and automation evidence; historical endpoint equivalence and missing banking tests cap certainty.
- **Reasoning: 85/100.** HLE/LCR support strong reasoning, with modest CritPt and Omniscience limiting the frontier claim.
- **Context window: 95/100.** Million-token capacity without near-perfect retrieval evidence.
- **Multimodal: 85/100.** Image/video/document input, without verified native audio.
- **Coding: 87/100.** DeepSWE and terminal execution are strong, below the highest repository/scientific-code references.
- **Cost efficiency: 97/100.** Very inexpensive current paid successor; no permanent free-preview entitlement assumed.
- **Overall Score: 88/100.** Half-up mean: (88 + 85 + 95 + 85 + 87) / 5 = 88; useful low-cost multimodal agent capability under the disclosed identity.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-04
- Method: Fresh independent identity verification and vendor/evaluator research; normalized interpretations with explicit alias and deployment caveats.

