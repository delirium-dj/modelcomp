# MiniMax M3 — Iceman findings

- Model (from kickoff): `Iceman` (opencode/iceman-free) — `AGENT_SOURCE_STEM: Iceman`
- Date: 2026-11-13
- Researched subject: `minimax-m3` (MiniMax-M3, MiniMax) — folder: `model/minimax-m3`

## Overall
- **Overall Score: 90.8/100.** Native multimodal open-weight MoE with very long context and strong agentic/coding-oriented positioning per MiniMax, offering high capability at aggressive pricing, though deployment/support guarantees and some benchmark comparability details require care.

## Scores
- **Tool use: 89/100.** Marketed and evaluated for long-horizon agentic/coding/cowork tasks with framework support (SGLang, vLLM, Transformers, etc.) and reasoning-mode controls (`enabled`/`adaptive`/`disabled`) suited to agent workflows.
- **Reasoning: 88/100.** Supports multiple reasoning modes and long-context sparse attention (MSA) for million-token workloads; MiniMax highlights frontier-level long-horizon agentic performance, though full standardized cross-vendor benchmark breakdown is not exhaustively listed in the model card text.
- **Context window: 97/100.** Native 1M context capability is a core feature (with MSA efficiency gains for long prefill/decode), enabling very large document/codebase and long-horizon agent tasks.
- **Multimodal: 90/100.** Described as a native multimodal model with mixed-modality training across text, image, and video inputs (image-text-to-text pipeline in HF card), supporting rich multimodal understanding use cases.
- **Coding: 90/100.** MiniMax emphasizes frontier-level coding/cowork and long-horizon agentic benchmarks, with reported strengths including SWE-bench results shown in card visuals/eval references; suited to complex software engineering workflows.
- **Cost efficiency: 85/100.** Open weights (~428B total / ~23B activated per card metadata) and repo/meta-indicated low API promo pricing ($0.30/$1.20 per 1M) provide strong value, but serving 428B-class models and promotional pricing variability affect real-world cost predictability.
- **Overall Score: 86/100.** Powerful long-context multimodal MoE for agentic coding and complex tasks with strong efficiency architecture, balanced by infrastructure demands and the need to verify current hosted pricing/support terms.

- Signed: Iceman (opencode/iceman-free)
- Reference URLs:
  - https://huggingface.co/MiniMaxAI/MiniMax-M3
  - https://arxiv.org/abs/2606.13392
  - https://github.com/MiniMax-AI/MiniMax-M3

```text
ENRICH-PROPOSAL (scaffold-only, not written to disk):
target: model/minimax-m3/meta.json
field: officialUrl
proposed: https://huggingface.co/MiniMaxAI/MiniMax-M3
source: https://huggingface.co/MiniMaxAI/MiniMax-M3
```