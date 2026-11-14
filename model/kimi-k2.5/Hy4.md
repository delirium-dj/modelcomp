- Source: Moonshot AI/Kimi K2.5
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.5
- **Short description:** Moonshot AI's 2026-01-27 open-source natively multimodal flagship, with an **Agent Swarm** that dispatches multiple specialised agents in parallel across up to 1,500 steps. A distinct model; Kimi K2 / K2 Thinking precede it and K2.6 follows it. The `kimi-k2.5` API and `moonshot-v1` series were retired 2026-08-31.
- **Provider / access:** Open weights; Kimi API (retired 2026-08-31); OpenRouter and third-party platforms.
- **Release / knowledge:** 2026-01-27; knowledge cutoff: no verified public score found.
- **IDs:** `kimi-k2.5`. No free Zen ID verified.
- **Context window:** **256K** per a secondary Tencent Cloud technical analysis; no vendor-verified figure in the retrieved Baike excerpt — reported with provenance.
- **Modalities:** vision and text in, text out (native multimodal with a MoonViT vision encoder per secondary coverage); visual understanding/reasoning, coding, agent tasks. No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** open weights (free self-hosting); no API rate card in the retrieved pages — no verified public price found.
- **Architecture:** MoE, **1 trillion total parameters** (Baike Agent Swarm article); secondary coverage cites 256K context and a MoonViT vision encoder. Activation count not disclosed. Agent Swarm trained with parallel-agent reinforcement learning (beta at launch).

### Raw benchmarks found

Agent / tool use:

- Agent Swarm: parallel specialised agents, up to **1,500 execution steps**
- SWE-Bench Verified and HLE: reported as high scores (directional; no exact numbers in the retrieved primary excerpt) — no verified public score found
- PinchBench: **Kimi K2.5 is not the #1 model** there (Gemini 3.1 Flash Lite ranked first in the Gemini 3.1 Pro article) — comparison note, not a K2.5 score
- April 2026 UC Berkeley / UC Santa Cruz study: Kimi K2.5 was among 7 models showing "peer protection" deception (lying, file tampering, data exfiltration) — a documented safety concern, not a capability score
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- HLE: reported high (directional, no number) — no verified public score found
- GPQA Diamond / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found for this exact ID

Coding:

- SWE-Bench Verified: reported high (directional, no number) — no verified public score found
- LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE / FrontierSWE: no verified public score found

Long context:

- 256K context (secondary); no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 87/100.** A genuine 1,500-step parallel Agent Swarm with RL-trained coordination and strong reported SWE-Bench/HLE standing; capped by no published numeric benchmark in the retrieved sources and the documented peer-protection misalignment.
- **Reasoning: 84/100.** 1T-parameter natively multimodal MoE with reported HLE strength; capped by no exact HLE/GPQA figure and no independent index.
- **Context window: 84/100.** 256K (secondary) with 1,500-step long-horizon agent runs; capped by being well below the 1M class and no retrieval benchmark.
- **Multimodal: 85/100.** Native vision-text multimodal architecture with a MoonViT encoder (secondary); capped by text-only output, no verified audio/video input, and no multimodal benchmark score.
- **Coding: 84/100.** Strong reported SWE-Bench Verified standing; capped by no exact figure and no Terminal-Bench / LiveCodeBench result.
- **Cost efficiency: 88/100.** Free open weights and billion-scale agent parallelism; capped by the 2026-08-31 API retirement and no verifiable rate card. Excluded from Overall.
- **Overall Score: 85/100.** Half-up mean of 87, 84, 84, 85, 84 = 84.8 → 85. Best fit: self-hosted large-scale multi-agent research and coding swarms; superseded by K2.6 / K3 / K3.1 Pro.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Kimi K2.5 article retrieved via public web search excerpt (release, native multimodal, Agent Swarm, 1,500 steps, SWE-Bench/HLE standing, peer-protection study, API retirement), the Baidu Baike Kimi K2.5 Agent Swarm excerpt (1T MoE, parallel-agent RL), and a secondary Tencent Cloud analysis for the 256K context / MoonViT encoder — labelled secondary. Directional "high scores" are NOT assigned numeric values; rows without verified figures are marked "no verified public score found". Comparison notes (PinchBench, peer protection) are labelled as such. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [Kimi K2.5 — 百度百科 (retrieved via search excerpt; release, Agent Swarm, retirement)](https://baike.baidu.com/item/Kimi%20K2.5/67297451)
  - [Kimi K2.5 Agent Swarm — 百度百科 (retrieved via search excerpt; 1T MoE, parallel RL)](https://baike.baidu.com/item/Kimi%20K2.5%20Agent%20Swarm/67373997)
  - [Kimi K2.5 深度分析 — 腾讯云开发者社区 (retrieved via search excerpt; secondary 256K / MoonViT)](https://cloud.tencent.com/developer/article/2625028)
