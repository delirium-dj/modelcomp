# MiMo V2.6 Flash Free — findings by GLM 5.3 Flash

- Source: Xiaomi (`XiaomiMiMo/MiMo-V2.6-Flash-RL`, MIT open weights; free route `mimo-v2.6-flash:free`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Flash (Free) — free-tier route of the MiMo-V2.6-Flash model
- **Short description:** Xiaomi's efficiency-balanced 309B/15B-active omnimodal MoE, offered free through gateway routes (e.g. Token Harbor `mimo-v2.6-flash:free`) alongside a cheap paid API; best for routine coding-agent work, automation, and multimodal understanding at very low cost. Trails its MiMo V2.6 Pro sibling on hard terminal/security tasks.
- **Provider / access:** Free route `mimo-v2.6-flash:free` (Token Harbor, OpenAI-compatible Chat Completions; text input only on that route); paid real-time API via Xiaomi MiMo (`mimo-v2.6-flash`, $0.14/$0.28 per 1M); OpenRouter `xiaomi/mimo-v2.6-flash`; MIT-licensed weights `XiaomiMiMo/MiMo-V2.6-Flash-RL` on Hugging Face. No Free ID on OpenCode Zen.
- **Release / knowledge:** Released 2026-09-21/22 (weights + API); knowledge cutoff not disclosed.
- **IDs:** `mimo-v2.6-flash:free` (Token Harbor free tier); `xiaomi/mimo-v2.6-flash` (OpenRouter / Xiaomi MiMo API); `XiaomiMiMo/MiMo-V2.6-Flash-RL` (open weights).
- **Context window:** 1,048,576 tokens (1M; verified via Token Harbor free-route listing and Xiaomi model card); up to 128,000 output tokens.
- **Modalities:** underlying checkpoint natively processes text, image, video and audio, returns text; the free route is text-input only (follow the capabilities shown for this specific route); reasoning yes; tool calling yes; JSON mode via OpenAI-compatible API.
- **Pricing (as of 2026-09-24):** Free on gateway free tiers (allowance-based, never billed on that route — availability/rate limits apply); underlying paid API $0.14 / $0.28 per 1M in/out (cached input $0.0028, 22% savings); Batch API 50% ($0.07/$0.14).
- **Architecture:** 309B total / 15B active sparse MoE, 48 layers, 256 routed experts (8 active per token); 681M vision encoder, 308M AudioTokenizer + 127M audio patch encoder, five-layer speculative decoder, Multi-Token Prediction, hybrid attention; MIT license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.6** (Xiaomi model card, vendor-reported; vs V2.6 Pro 89.9, V2.5 Pro 65.2)
- Toolathlon-Verified: **73.6** (Xiaomi card; vs Pro 76.9)
- AutomationBench v1.0.6: **52.3** (Xiaomi card; vs Pro 53.1)
- OSWorld-Verified: **80.8** (Xiaomi card; vs Pro 82.0)
- JobBench: **61.2** (Xiaomi card; vs Pro 62.0)
- Agents' Last Exam: **27.6** (Xiaomi card; vs Pro 31.6)
- Terminal-Bench 4.0: **28.8** (Xiaomi card; trails Pro's 34.9)
- GDPval-AA, Tau3-Banking: no verified public score found

Reasoning / knowledge:

- CyberGym: **95.1** (Xiaomi card; leads Pro's 94.0 — security task suite)
- GPQA Diamond: no verified public score found for Flash
- HLE: no verified public score found for Flash
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- LCR / MLCR, CritPt: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- DeepSWE v1.1: **67.9** (Xiaomi card; vs Pro 71.9, V2.5 Pro 19.0)
- MiMo Code Bench: **61.2** (in-house benchmark; vs Pro 63.2)
- ProgramBench: **26.0** (Xiaomi card; vs Pro 26.5)
- MiMo VisualCoding: **71.5** (Xiaomi card; vs Pro 72.3)
- SEC Bench Pro: **47.5** (Xiaomi card; trails Pro's 66.3)
- SWE-bench Verified / SWE-bench Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- 1M-token window; no MRCR/RULER/GraphWalks retrieval value verified for this exact model

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 2.1 87.6% sits just under the ~88%+ frontier reference, with Toolathlon 73.6%, OSWorld 80.8% and JobBench 61.2% all strong; the weak Terminal-Bench 4.0 (28.8%) and missing GDPval/Tau3 keep it at the band edge.
- **Reasoning: 65/100.** CyberGym 95.1% (security) and Agents' Last Exam 27.6% are the only verified reasoning-adjacent numbers — no GPQA/HLE/index run exists for Flash, so the score rests on thin evidence, conservative.
- **Context window: 95/100.** 1,048,576 tokens maps to the ≥1M tier (95–100); no measured ≥98% retrieval at 512K+ keeps it off the maximum.
- **Multimodal: 85/100.** The checkpoint natively handles text, image, video and audio (+video/audio-in band 75–90); the free route caps input to text, which is the caveat.
- **Coding: 84/100.** DeepSWE v1.1 67.9% and TB2.1 87.6% are strong; ProgramBench 26.0% and SEC Bench Pro 47.5% trail Pro on the hardest engineering, and no SWE-bench Verified/LiveCodeBench numbers prevent 90+.
- **Cost efficiency: 100/100.** $0 on the free route ($0 = 100 per methodology); the underlying paid API at $0.14/$0.28 per 1M is also among the cheapest tracked — free tiers flagged as allowance-based with availability caveats.
- **Overall Score: 83/100.** Mean of the five quality dims (88 + 65 + 95 + 85 + 84) / 5 = 83.4 → 83. Best-fit: the free workhorse for routine coding-agent loops, automation and multimodal triage — reserve Pro escalation for hard terminal/security work.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-09-24
- Method: public internet research (Xiaomi model cards and launch pricing via Token Harbor, OpenRouter and llm-stats listings, DuckDuckGo web search); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Mimo_v2.md`, using the same headings.
