# MiMo V2.6 Flash — findings by Kimi K3

- Source: Xiaomi/MiMo-V2.6-Flash (`mimo-v2.6-flash`); free Zen ID `mimo-v2.6-flash-free`
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Flash (incl. "Free"-tier wording: MiMo-V2.6-Flash Free on OpenCode Zen)
- **Short description:** Xiaomi's cheaper open-weight (MIT) sibling of MiMo-V2.6-Pro — a 309B/15B-active sparse MoE with the same omnimodal input stack and 1M context, landing within a few points of Pro on most vendor agentic benchmarks at ~1/3 of the API price. Flagship-adjacent model for high-volume agentic and multimodal work.
- **Provider / access:** OpenCode Zen `opencode/mimo-v2.6-flash-free` (chat completions, `https://opencode.ai/zen/v1/chat/completions`) — free tier; Xiaomi MiMo API platform (model ID `mimo-v2.6-flash`, OpenAI-compatible) and OpenRouter (`xiaomi/mimo-v2.6-flash`). Self-hostable (~178 GB checkpoint) via vLLM/SGLang; community 4-bit quants exist.
- **Release / knowledge:** Announced 2026-09-22 (UTC+8); Hugging Face repo (`XiaomiMiMo/MiMo-V2.6-Flash-RL`) live late 2026-09-21 UTC. Knowledge cutoff not stated publicly.
- **IDs:** Zen Free ID `opencode/mimo-v2.6-flash-free`; Xiaomi `mimo-v2.6-flash`; OpenRouter `xiaomi/mimo-v2.6-pro` sibling at `xiaomi/mimo-v2.6-flash`.
- **Context window:** 1M tokens (1,048,576) total — verified via HF model card metadata and vendor pricing; hybrid attention (39 sliding-window + 9 global layers of 48).
- **Modalities:** Text + image + video + audio in; text out; reasoning model (explicit reasoning mode; `mimo` parsers required for reasoning/tool-call extraction in vLLM); tool calls + structured output via the OpenAI-compatible API.
- **Pricing (as of 2026-09-29):** $0 on OpenCode Zen for a limited time (provider collects data to improve the model during the free period — Zen privacy note). Paid API: $0.14/M input, $0.0028/M cached input, $0.28/M output (Xiaomi, per OpenRouter catalogue checked 2026-09-22).
- **Architecture:** Sparse MoE, 309B total / 15B active, 256 routed experts (8 active), no shared experts; 48 layers; same 681M MiMo ViT + 308M AudioTokenizer + 127M audio patch encoder as Pro; 5-layer MTP drafter. MIT license.

### Raw benchmarks found

Agent / tool use:

- Toolathon — Toolathlon-Verified: **73.6** (Xiaomi model card; Pro: 76.9, Claude Opus 5: 80.6)
- OSWorld-Verified: **80.8%** (Xiaomi model card; Pro: 82.0)
- AutomationBench v1.0.6: **52.3** (Xiaomi model card; GPT-5.6 Sol: 45.8)
- Terminal-Bench 4.0: **28.8** (Xiaomi model card; Pro: 34.9, Opus 5: 49.0)
- Terminal-Bench 2.1: **87.6** (Xiaomi model card; Pro: 89.9)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found for Flash (Pro: 1673 Elo vendor-reported)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: no verified public score found for Flash (Pro scores 46; V2.5-Pro scored 26 under an earlier index version)
- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- DeepSWE v1.1: **67.9** (Xiaomi model card; release-notes page says 65.7 — different run settings; V2.5-Pro: 19.0)
- ProgramBench: **26.0** (Xiaomi model card; Pro: 26.5, Opus 5: 37.0)
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- MiMo VisualCoding (vendor-internal): 71.5 — provisional, not independently reproducible

Security (vendor-reported):

- ExploitBench: **25.3** (Pro: 47.9 — the gap opens mainly on offensive security)
- CyberGym: **95.1** (Pro: 94.0)

Long context:

- 1M-token window vendor-verified; no public MRCR / RULER / GraphWalks retrieval score found.

### Normalized scores (1–100)

- **Tool use: 82/100.** Toolathlon-Verified 73.6, OSWorld-Verified 80.8 and AutomationBench 52.3 sit within a few points of the Pro flagship and ahead of GPT-5.6 Sol on automation. Capped: all numbers are vendor-harness; no independent agentic suite result published.
- **Reasoning: 76/100.** Codersera's reading of the vendor table puts Flash "almost as strong as Pro on coding and general-agent tasks," but no independent intelligence-index score exists for Flash to confirm Pro-level reasoning (46). Capped by that missing independent verification and by Pro's ~12-point documented gap to the closed frontier.
- **Context window: 90/100.** Same 1M-token window and hybrid-attention serving design as Pro, at flash prices. Capped: no independent long-context retrieval score published.
- **Multimodal: 80/100.** Identical omnimodal input stack to Pro (text + image + video + audio in via the same ViT/audio encoders), text-only output; no independent multimodal benchmark published.
- **Coding: 78/100.** DeepSWE 67.9 and Terminal-Bench 2.1 87.6 are close to Pro (71.9 / 89.9); ProgramBench essentially ties Pro (26.0 vs 26.5). Capped by Terminal-Bench 4.0 at 28.8 (frontier models near 50+) and the absence of SWE-bench Verified / LiveCodeBench numbers.
- **Cost efficiency: 96/100.** Free on OpenCode Zen (limited-time, data-may-be-used caveat) and just $0.14/$0.28 per million on the paid API — the cheapest way to run this capability class; capped only by the free tier's data-collection caveat and time limit.
- **Overall Score: 81/100.** Mean of the five non-cost dims (82+76+90+80+78)/5 = 81.2. Best fit: high-volume agentic/multimodal workloads that want near-Pro capability at free-or-flash pricing, preferably self-hosted or via the free Zen tier when privacy allows.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: Public internet research (Xiaomi model card figures as reproduced in independent launch coverage, Artificial Analysis, OpenCode Zen docs, OpenRouter catalogue); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
