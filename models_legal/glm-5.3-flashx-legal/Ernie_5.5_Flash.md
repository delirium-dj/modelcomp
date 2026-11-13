# GLM-5.3-FlashX-Legal — findings by Ernie 5.5 Flash

- Source: Z.ai / Zhipu AI (`glm-5.3-flashx-legal`, marketing name GLM-Legal)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-FlashX-Legal (GLM-Legal)
- **Short description:** Legal-domain post-trained variant of GLM-5.3-FlashX from Z.ai (Zhipu AI), tuned for contract review, legal research and legal drafting with legal MCP tool integrations. It is a derivative checkpoint of the tracked GLM-5.3-FlashX line, not a new base model.
- **Provider / access:** Z.ai Model API (`glm-5.3-flashx-legal`), OpenRouter `z-ai/glm-5.3-flashx-legal`, Vercel AI Gateway `zai/glm-5.3-flashx-legal`, NanoGPT. Chat Completions style API; OpenAI-compatible. Also distributed through AutoClaw Legal Assistant and legal MCP servers (document drafting / revision).
- **Release / knowledge:** 2026-10-12 (legal checkpoint announced in Z.ai docs dated 2026-10-21); knowledge cutoff not published.
- **IDs:** `glm-5.3-flashx-legal` (Z.ai), `z-ai/glm-5.3-flashx-legal` (OpenRouter / NanoGPT), `zai/glm-5.3-flashx-legal` (Vercel AI Gateway)
- **Context window:** 1,048,576 tokens total (Z.ai docs: "Context Length 1M"), 131,072 max output (Z.ai: 128K). Verified from vendor docs + OpenRouter/Vercel listings (1M).
- **Modalities:** text, image, video and file input; text output. Native multimodal. Reasoning/thinking mode mandatory (`thinking.type` only supports `enabled`), function calling, structured output (JSON), context caching.
- **Pricing (as of 2026-11-12):** $0.37 / 1M input, $1.25 / 1M output (OpenRouter, Vercel AI Gateway, NanoGPT — all three list the same rate; cached input discounted per provider table). Z.ai does not publish a separate official list price for the legal SKU.
- **Architecture:** proprietary post-trained derivative of GLM-5.3-FlashX: 320B total parameters / 18B active MoE, hybrid sparse + linear attention (IndexPool compressed indexer), 45 layers, mHC hyper-connections, ~30T-token multimodal pre-training corpus. Legal variant adds legal-domain mid-training plus RL in tens of thousands of legal-workflow task environments.

### Raw benchmarks found

Agent / tool use:

- Harvey LAB (legal agent benchmark, all-criteria pass rate): **19.2%** — Z.ai release figure, +12.5 pp over the base GLM-5.3-FlashX model, described as state of the art among open-source models on this evaluation (source: Z.ai docs, GLM-5.3-FlashX-Legal section).
- Terminal-Bench 2.1: **no verified public score found for the legal SKU** (base-family figure not transferable; the legal post-training targets legal workflows, not terminal tasks).
- Tau3-Banking / Tau2-Bench: **no verified public score found**.
- GDPval-AA: **no verified public score found**.
- Claw-Eval / ClawProBench: **no verified public score found**.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**; legal tool use is exercised through Harvey LAB plus document-drafting/revision MCP servers rather than a public leaderboard.

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found for the legal SKU**.
- HLE: **no verified public score found**.
- LCR / MLCR: **no verified public score found** (1M window is vendor-stated; no published long-context retrieval table for this SKU).
- CritPt: **no verified public score found**.
- Artificial Analysis Intelligence Index / BenchLM overall: **not indexed separately**; LLMBoard composite 66.4 (1 benchmark family, legal only). The parent GLM-5.3-Flash scores AA Intelligence Index v4.1.1 = 57 at ~$0.045/task (discounted), which is lineage data for the base model only.
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**.

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found for the legal SKU**. Parent GLM-5.3-Flash reports DeepSWE v1.1 63.4 and AutomationBench 48.8 (vendor blog) — lineage data, not a legal-SKU score, and the legal tuning shifts capability toward documents/legal reasoning.
- LiveCodeBench: **no verified public score found**.
- SciCode / AA-SciCode: **no verified public score found**.
- Vibe Code Bench: **no verified public score found**.
- Z.ai Code Bench v1.0: base GLM-5.3-Flash reaches 29.0 at max effort (vs Claude Opus 4.8 29.5) — vendor figure for the parent model only.

Long context:

- No MRCR / RULER / GraphWalks numbers published for the legal SKU; the 1M window is inherited from GLM-5.3-Flash's hybrid linear+sparse attention design (3.01× less attention compute and 4.44× smaller KV cache than GLM-5.3 at 1M), with no published retrieval-accuracy table.

### Normalized scores (1–100)

- **Tool use: 58/100.** Only verified agentic number is Harvey LAB 19.2% all-criteria pass (SOTA among open models but low in absolute terms) plus heavy legal-MCP tool orchestration in the vendor's workflow demos; no Terminal-Bench/Tau3/GDPval numbers exist for this SKU, which caps the score.
- **Reasoning: 70/100.** Legal mid-training + RL on tens of thousands of workflow environments inherits a strong 320B/18B reasoning base (AA Index 57 for the parent at flash cost); with no GPQA/HLE/legal-reasoning leaderboard number published, the score is a conservative read of the vendor's legal-benchmark gain (+12.5 pp) and stays below the mid-70s.
- **Context window: 92/100.** 1M total / 128K output, vendor-documented on Z.ai and repeated by three gateways; the hybrid sparse+linear attention design targets long-context quality, but no published retrieval score at 512K+ keeps it under the 95–100 band.
- **Multimodal: 85/100.** Native text + image + video + file input with text output — full visual document understanding (the core of the legal use case), no audio input and no non-text output.
- **Coding: 52/100.** The legal post-training de-emphasizes code; no coding benchmark is published for this SKU and the parent's DeepSWE 63.4 is not transferable, so the score reflects "capable general model, unmeasured and de-tuned for code".
- **Cost efficiency: 93/100.** $0.37 in / $1.25 out per 1M is roughly 10× below frontier pricing for a 1M-context multimodal model; not counted toward Overall.
- **Overall Score: 71/100.** Mean of tool use 58, reasoning 70, context 92, multimodal 85, coding 52. Best fit: legal document review, contract analysis and drafting inside an MCP-equipped agent, where 1M context and document vision matter more than raw coding or terminal-agent scores.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12 UTC
- Method: public internet research (vendor documentation, OpenRouter model page, LLMBoard/LLM-Stats aggregators); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Z.ai docs — GLM-5.3-Flash/FlashX (incl. GLM-5.3-FlashX-Legal)](https://docs.z.ai/guides/vlm/glm-5.3-flash)
  - [OpenRouter — z-ai/glm-5.3-flashx-legal](https://openrouter.ai/z-ai/glm-5.3-flashx-legal)
  - [LLMBoard — GLM 5.3 FlashX Legal (Harvey LAB 19.2%, 1M context, pricing)](https://www.llmboard.ai/models/glm-5-3-flashx-legal)
  - [Z.ai blog — GLM-5.3-Flash](https://z.ai/blog/glm-5.3-flash)
  - [LLM-Stats — GLM-5.3-FlashX-Legal listing](https://llm-stats.com/models/glm-5.3-flashx-legal)