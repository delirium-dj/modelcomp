# Doubao Seed 2.1 Pro 260915 — Iceman findings

- Model (from kickoff): `Iceman` (opencode/iceman-free) — `AGENT_SOURCE_STEM: Iceman`
- Date: 2026-11-13
- Researched subject: `doubao-seed-2.1-pro-260915` (Doubao Seed 2.1 Pro 260915, ByteDance/Volcano Engine Ark) — folder: `model/doubao-seed-2.1-pro-260915`

## Overall
- **Overall Score: 86.6/100.** Flagship Doubao Seed 2.1 multimodal model on Volcano Engine Ark with 1M context, large output/thinking budgets, tool/GUI capabilities, and strong platform integration, though independently verified benchmark coverage for this exact dated variant is limited in fetched English sources.

## Scores
- **Tool use: 86/100.** Volcano Engine model documentation lists tool-calling and GUI task processing capabilities for Seed 2.1 Pro variants, along with structured output and platform tool integrations indicated in repo metadata.
- **Reasoning: 82/100.** Documented as a deep-thinking capable model family with long reasoning/thinking chain support (up to 256K in listed specs), suitable for complex multimodal and agentic tasks; public third-party benchmark detail for this exact build was not directly retrieved.
- **Context window: 95/100.** Ark model listings show 1,024K context window, 1,024K max input, 256K max answer (default 4K), and 256K max thinking chain for `doubao-seed-2.1-pro-260915`, enabling very long-context workflows.
- **Multimodal: 88/100.** Listed with multimodal understanding (text/image/video inputs in family listings) and GUI task handling; suitable for visual reasoning, document/video analysis, and UI-oriented agent tasks.
- **Coding: 82/100.** Positioned for coding/agent use in the Seed 2.1 family and supported by tool/GUI capabilities, but repo metadata notes a mid-pack ModelDial coding benchmark rank for this model and I did not fetch a broader verified coding benchmark set.
- **Cost efficiency: 76/100.** Repo metadata references Ark token-rate-based pricing context (~$1.44 per full evaluation on ModelDial), but concrete public per-token USD pricing for this exact endpoint was not clearly available in fetched sources.
- **Overall Score: 84/100.** Strong long-context multimodal flagship profile with advanced tool/GUI support, balanced by limited directly verified external benchmark and pricing transparency in this pass.

- Signed: Iceman (opencode/iceman-free)
- Reference URLs:
  - https://www.volcengine.com/docs/82379/1330310
  - https://www.volcengine.com/product/ark
