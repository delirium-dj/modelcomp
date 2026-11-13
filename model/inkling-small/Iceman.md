# Inkling Small — Iceman findings

- Model (from kickoff): `Iceman` (opencode/iceman-free) — `AGENT_SOURCE_STEM: Iceman`
- Date: 2026-11-13
- Researched subject: `inkling-small` (Inkling-Small, Thinking Machines Lab) — folder: `model/inkling-small`

## Overall
- **Overall Score: 86.8/100.** Open-weight multimodal MoE model (276B total / 12B active) with text/image/audio inputs, strong coding/agentic and reasoning benchmark results, and broad framework support, though served context and ecosystem maturity lag more established families.

## Scores
- **Tool use: 87/100.** Designed for agentic and tool-use systems; model card reports strong agentic/general results (e.g. MCP Atlas 79.6/79.2%, Toolathlon Verified 54.4%, Tau 3 Banking 15.5%, BrowseComp 77.4%, GDPval-AA v2 1269) indicating solid multi-step workflow capability.
- **Reasoning: 88/100.** Shows strong reasoning performance across math/STEM/abstract tasks (e.g. GPQA Diamond 89.5%, HLE text-only 31.6% / with tools 47.8%, AIME 2026 95.5%, HMMT Feb 2026 90.2%, ARC-AGI-1 84.0%, ARC-AGI-2 40.1%).
- **Context window: 82/100.** Repo metadata claims 1,000,000 total context but notes served context can be a fraction of the claimed window and a young ecosystem may limit practical long-context deployment rails; exact served limits depend on runtime/framework.
- **Multimodal: 88/100.** Accepts text, image, and audio inputs with text output; model card reports multimodal benchmark results (e.g. MMMU Pro 74.0%, CharXiv RQ 77.4/81.3%, Audio MC 54.9%, MMAU 77.0%, VoiceBench 90.1%).
- **Coding: 89/100.** Strong coding/agentic coding performance reported (e.g. SWE-bench Verified 80.2%, SWE-bench Pro public 55.9%, Terminal Bench 2.1 best harness 64.7%, SciCode 48.7%), suitable for developer and coding-agent use cases.
- **Cost efficiency: 90/100.** Open weights (Apache-2.0) enable free self-hosting at infrastructure cost, with BF16/NVFP4 options and support across major serving frameworks/providers, offering strong value for capable multimodal agentic workloads.
- **Overall Score: 85/100.** A strong open multimodal coding/reasoning model with competitive benchmarks and flexible deployment, balanced by context-serving realities and a relatively young ecosystem.

- Signed: Iceman (opencode/iceman-free)
- Reference URLs:
  - https://huggingface.co/thinkingmachines/Inkling-Small
  - https://github.com/thinking-machines-lab/tinker-cookbook
  - https://tinker.thinkingmachines.ai/playground

```text
ENRICH-PROPOSAL (scaffold-only, not written to disk):
target: model/inkling-small/meta.json
field: officialUrl
proposed: https://huggingface.co/thinkingmachines/Inkling-Small
source: https://huggingface.co/thinkingmachines/Inkling-Small
```