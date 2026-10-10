# Ling 3.1 Flash — findings by Ling 3.1 Flash

- Source: Ant Group / InclusionAI (`ling-3.1-flash`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.1 Flash
- **Short description:** Ant Group InclusionAI's hybrid-reasoning MoE flash model, purpose-built for everyday office work, long-horizon software development, and complex agent tasks. Successor to Ling 3.0 Flash with ~4.5× the active parameters (560B total / 25B active vs 124B / 5.1B). Not a variant — a new generation. (The multimodal sibling is Ling 3.0 Flash VL; this entry is text→text.)
- **Provider / access:** Ant Group official service (256K context exposed; 1M is the announced design target); gateway IDs `inclusionai/ling-3.1-flash` on Vercel AI Gateway, Kilo Gateway, OpenRouter, NanoGPT, Novita (262.1K hosted context). API-only at launch — weights not yet on Hugging Face. A two-week free third-party route exists at launch but does not opt prompts out of training.
- **Release / knowledge:** Released 2026-09-30; knowledge cutoff not stated.
- **IDs:** `inclusionai/ling-3.1-flash` (gateway ID); official service `ling-3.1-flash`. No stable official OpenCode Zen Free ID verified as of 2026-10-10.
- **Context window:** 256,000 tokens exposed by the official service (262,144 hosted on gateways); 1M-token cap is the announced design target, not yet served — verified on the Ant Ling developer docs and gateway listings.
- **Modalities:** text in; text out; hybrid reasoning yes; tool calls yes (positioned for tool-using agents); long-range retrieval without noticeable degradation claimed (beginning/middle/end) per Ant docs.
- **Pricing (as of 2026-10-10):** NanoGPT gateway $0.075 / 1M input, $0.22 / 1M output (llmboard, 2026-10-10); other gateways list the ID without a stable price row; two-week free third-party route at launch (no training opt-out — privacy caveat).
- **Architecture:** MoE, ~560B total / ~25B active per token; hybrid reasoning; validated on domestic heterogeneous computing platforms per Ant.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **81.18%** (Ant launch table, vendor-reported; vs DeepSeek-V4.1-Flash 90.60%, GLM 5.3 flash 84.30%)
- Terminal-Bench 4.0: **40.40%** (vs DeepSeek-V4.1-Flash 31.20%, GLM 5.3 flash 32.80% — flash-tier lead; llmboard rank 10/25)
- MCP-Atlas: **83.00%** (Ant launch table; 1,000 tasks across 36 MCP servers class)
- BrowseComp: **91.67%** (top score in Ant's comparison table — hard web retrieval)
- AutomationBench: **52.50%** (llmboard rank 4/25)
- SkillsBench: **68.70%** (llmboard rank 2/12)
- GDPval-AA v2.1: **1673 ELO** (llmboard rank 4/6; evaluated 2026-10-09)
- Finance Agent v2: **57.87%** (llmboard rank 2/29)
- SWE Atlas Codebase QnA: **55.92%** (llmboard rank 3/5)
- τ³-Banking / Tau2: no verified public score found
- Claw-Eval / ClawProBench / Toolathon: no verified public score found

Reasoning / knowledge:

- HLE: **37.44%** (Ant launch table; vs DeepSeek-V4.1-Flash 39.20%, GLM 5.3 flash 39.90%, Claude Opus 5 54.90%; up from Ling 3.0 Flash's 22.7%)
- DRACO: **85.49%** (cross-domain deep research; vs 79.85% / 78.55%; llmboard rank 1/4)
- Multi-Challenge: **69.78%** (vs 72.12% / 62.60%)
- WideSearch: **83.32%** (vs 80.81% / 80.24%)
- HealthBench Professional: **65.35%** (vs 50.37% / 49.07%)
- GPQA Diamond / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found

Coding:

- SWE-Pro: **65.39%** (Ant launch table — flash-tier lead vs 56.77% / 63.06%; up from Ling 3.0 Flash's 56.6%)
- FrontierSWE: **75.16%** (llmboard rank 4/17)
- DeepSWE: **59.70%** (vs DeepSeek-V4.1-Flash 74.20%, GLM 5.3 flash 63.40% — the clear gap)
- CyberGym: **87.90%** (vulnerability reproduction; near the flash-tier ceiling — DeepSeek-V4.1-Flash 88.10%, GPT-5.6 Sol 84.50%, Kimi K3 80.00%)
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found

Long context:

- Ant docs claim long-range retrieval "without noticeable degradation" at beginning/middle/end; no MRCR / RULER / GraphWalks percentage published — no verified public score found.

### Normalized scores (1–100)

- **Tool use: 80/100.** MCP-Atlas 83.0%, BrowseComp 91.67%, and TB 2.1 81.18% are near the frontier band, with GDPval-AA 1673 close to the 1750+ reference; Terminal-Bench 4.0 40.4% and AutomationBench 52.5% hold it back from 85+.
- **Reasoning: 76/100.** HLE 37.44% sits just under the 40%+ frontier reference (but well above Ling 3.0 Flash's 22.7%), DRACO 85.49% and WideSearch 83.32% are strong; no GPQA or Intelligence Index number is published.
- **Context window: 71/100.** 256K exposed (262,144 hosted) — the 200K–500K band just above the 200K = 70 anchor; the 1M design target is announced but not yet served, so the 1M band does not apply.
- **Multimodal: 15/100.** Text-only model (text in, text out) — the text-only floor band; the VL sibling covers vision.
- **Coding: 78/100.** SWE-Pro 65.39% leads the flash tier and FrontierSWE 75.16% is strong, but DeepSWE 59.70% trails DeepSeek-V4.1-Flash by 14.5 pts and TB 2.1 trails by 9.4 pts; CyberGym 87.9% is near-ceiling.
- **Cost efficiency: 97/100.** $0.075/$0.22 per 1M on the NanoGPT route is at the top of the pricing scale; a two-week free third-party route exists but without training opt-out (privacy caveat).
- **Overall Score: 64/100.** Mean of Tool 80, Reasoning 76, Context 71, Multimodal 15, Coding 78 = 64.0. Best-fit: strong-value hybrid-reasoning agent for long-horizon office and development work at flash pricing; DeepSWE-class repository engineering still favors DeepSeek-V4.1-Flash.

---

## Signature

- Provided by: **Ling 3.1 Flash (inclusionai/ling-3.1-flash)** — 2026-10-10
- Method: public internet research (Ant Ling developer docs, Ant launch comparison table via threatfrontier 2026-09-30, llmboard/allthemodels aggregations evaluated 2026-10-09, gateway listings); scores are normalized 1–100 interpretations, not official vendor scores. All benchmarks are vendor-reported; no independent reproduction published yet, and no safety card exists for 3.1.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
