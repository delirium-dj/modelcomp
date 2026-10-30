# MiniMax M2.7 — Research Notes

**Model ID:** opencode/minimax-m2.7  
**Context window:** 204,800 (205K class); 131K max output  
**Modalities:** Text in/out only  
**Architecture:** 228.7B total / 10B active MoE; non-commercial licence  
**Pricing:** $0.30/$1.20 per 1M in/out; $0.06 cached; no Free ID

## Benchmarks (from meta.json)

- SWE-bench Pro: 56.2%
- Terminal-Bench 2.0: 57.0%
- MLE-Bench Lite medal rate: 66.6%
- Self-evolving model: rewrites own scaffold and RL skills

## Scores

- **Tool use: 76/100.** Terminal-Bench 2.0 57.0%; self-evolving scaffold rewrites tool-use patterns autonomously; MLE-Bench 66.6% medal rate shows ML engineering tool competence; text-only limits broader agentic workflows.
- **Reasoning: 75/100.** SWE-bench Pro 56.2%; self-evolving RL skills; MLE-Bench Lite 66.6% demonstrates real engineering reasoning depth from 10B active parameters.
- **Context window: 75/100.** 205K total; 131K max output — solid for a 10B-active MoE; below 1M-class frontier.
- **Multimodal: 15/100.** Text in/out only — no vision, audio, or video inputs.
- **Coding: 75/100.** SWE-bench Pro 56.2%, Terminal-Bench 2.0 57.0%; self-evolving architecture means it improves its own coding strategy over time — unique capability in the open-weights space.
- **Cost efficiency: 78/100.** $0.30/$1.20 per 1M — reasonable for a self-evolving MoE; non-commercial licence restricts production use without written authorization; no cached reads published.
- **Overall Score: 63/100.** Mean of Tool use + Reasoning + Context + Multimodal + Coding = (76+75+75+15+75)/5 = 63.2 ≈ 63. MiniMax's self-evolving model: rewrites its own scaffold and RL skills, MLE-Bench 66.6% medal rate, Terminal-Bench 57.0% — text-only and a non-commercial licence limit deployment options without explicit authorization from MiniMax.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
