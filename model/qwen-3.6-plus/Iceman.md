# Qwen 3.6 Plus — Iceman findings

- Model (from kickoff): `Iceman` (opencode/iceman-free) — `AGENT_SOURCE_STEM: Iceman`
- Date: 2026-11-13
- Researched subject: `qwen-3.6-plus` (Qwen3.6 Plus, Alibaba/Qwen) — folder: `model/qwen-3.6-plus`

## Overall
- **Overall Score: 84/100.** Earlier-generation Qwen Plus MoE for real-world agents and coding with 1M context and multimodal inputs, but now superseded by newer 3.7/3.8 tiers and with limited directly verifiable primary-source detail retrieved in this pass.

## Scores
- **Tool use: 82/100.** Repo metadata positions it for real-world/GUI/API agent work and coding workflows; hosted Qwen Plus tiers typically support tool-calling in API environments, but I could not retrieve a detailed primary model page for this exact variant during this pass.
- **Reasoning: 80/100.** As a Plus-tier MoE in the 3.6 generation it targets practical agentic reasoning and coding, but it is explicitly superseded by later models and I did not fetch a comprehensive benchmark table for direct verification.
- **Context window: 92/100.** Repo metadata states a 1,000,000-token context window with 65K output, supporting long-context agent and document tasks (with provider/lane-dependent behavior).
- **Multimodal: 84/100.** Repo metadata indicates text, image, and video inputs with text output, enabling multimodal agent/coding assistance; exact modality limits were not confirmed from an accessible primary spec page in this pass.
- **Coding: 82/100.** Repo/meta cites solid coding/agent benchmark performance for its generation (e.g. SWE-bench Pro 56.6%, LiveCodeBench 87.1%), but newer Qwen models provide stronger overall capability.
- **Cost efficiency: 80/100.** Repo metadata lists tiered pricing (e.g. ~$0.50/$3.00 per 1M up to 256K, higher above 256K, with routed provider options), reasonable for its class though less attractive now that successors exist.
- **Overall Score: 80/100.** Capable legacy Plus-tier long-context multimodal agent/coding model, but best treated as a compatibility/transition option given supersession by Qwen 3.7/3.8 and limited fresh primary documentation retrieved.

- Signed: Iceman (opencode/iceman-free)
- Reference URLs:
  - https://qwenlm.github.io/blog/qwen-3.6-plus/
  - https://www.alibabacloud.com/help/en/model-studio/models
  - https://huggingface.co/Qwen

```text
ENRICH-PROPOSAL (scaffold-only, not written to disk):
target: model/qwen-3.6-plus/meta.json
field: statusNote
proposed: Superseded by newer Qwen 3.7/3.8 Plus tiers; prefer successors for new agent work.
source: https://qwenlm.github.io/blog/qwen-3.6-plus/ (metadata/context)
```