- Source: xAI/Grok 4.1
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1
- **Short description:** xAI's 2025-11-18 model that shifted Grok from chat to a task-executing agent, with strong emotional intelligence, reasoning and multimodal/tool-calling upgrades. Offered in thinking and non-thinking modes. A distinct model; `grok-4.1-fast` (a serving variant), `grok-4.20`, `grok-4.3` and `grok-4.5` are separate tracked folders.
- **Provider / access:** Grok/X surfaces and xAI API; a 1M-context API with a resource-contract `context_window_size` parameter (secondary developer analysis).
- **Release / knowledge:** 2025-11-18 (two-week silent rollout with blind testing); knowledge cutoff: no verified public score found.
- **IDs:** `grok-4.1`; thinking / non-thinking modes. No free Zen ID verified.
- **Context window:** **1,000,000 tokens** (secondary CSDN API analysis); no vendor-verified figure in the retrieved Baike excerpt — reported with provenance.
- **Modalities:** text and multimodal input in, text out; system-level response mechanisms for multimodal inputs, API integration, cross-platform instruction parsing, instant-response and deep-thinking modes. No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** no rate card in the retrieved pages — no verified public price found.
- **Architecture:** Proprietary, closed weights; parameter count not disclosed. RL infrastructure optimised for emotional understanding, using a smart reasoning model as the reward model; integrated with DeepSeek-Math-V2 for automated theorem proving and verification.

### Raw benchmarks found

Agent / tool use:

- LMArena text leaderboard: thinking mode **1483 Elo (#1)**, non-thinking **1465 Elo (#2)**
- Two-week silent-release blind test: **64.78%** user preference
- Factual hallucination rate on information-retrieval prompts: **12.09% → 4.22%**
- EQ-Bench3: the two modes took the **top two places** (directional, no scores)
- Creative writing benchmarks: **2nd and 3rd** (directional, no scores)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- LMArena 1483 / 1465 Elo as above; automated maths theorem proving and verification
- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found

Coding:

- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found
- Documented limitation (secondary): users reported Grok 4.1 was less precise than ChatGPT in programming, law and medicine despite strong emotional understanding

Long context:

- 1M window (secondary) with a resource-contract API design; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 85/100.** #1 LMArena thinking Elo, a 64.78% blind-test preference and a 12.09%→4.22% hallucination reduction with native tool calling; capped by no scored agent harness and reported professional-domain precision gaps.
- **Reasoning: 85/100.** LMArena #1/#2, EQ-Bench3 top two, automated theorem proving and a reward-model-based RL stack; capped by no GPQA/HLE/ARC figure.
- **Context window: 89/100.** 1M context (secondary) with an explicit resource-contract API design; capped by the figure being secondary and no retrieval benchmark.
- **Multimodal: 82/100.** System-level multimodal input handling and cross-platform instruction parsing; capped by text-only output, no verified audio/video input, and no multimodal benchmark score.
- **Coding: 78/100.** General coding capability of the generation; capped by zero published coding benchmarks and documented precision gaps in programming.
- **Cost efficiency: 82/100.** Two-mode serving (cheap instant vs deep thinking) and a 1M window at Grok-tier pricing; capped by no verifiable rate card. Excluded from Overall.
- **Overall Score: 84/100.** Half-up mean of 85, 85, 89, 82, 78 = 83.8 → 84. Best fit: high-engagement conversational agents and factual retrieval with low hallucination; not precision-critical professional or coding work.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Grok 4.1 article retrieved via public web search excerpt (release, LMArena Elo, 64.78% preference, 12.09%→4.22% hallucination, EQ-Bench3, creative writing, RL/theorem-proving design), plus secondary CSDN / Aliyun developer analyses for the 1M context/resource-contract API and the professional-domain precision caveat — explicitly labelled secondary. `grok-4.1-fast` figures ($0.20/$0.50 pricing, ~2M context, LMArena lineage) are labelled as a separate serving variant and not merged here; `grok-4.20`, `grok-4.3`, `grok-4.5`, `grok-4-fast` and `grok-4` are separate folders. Directional ranks are not assigned numeric scores; rows without verified figures are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [Grok 4.1 — 百度百科 (retrieved via search excerpt; LMArena, hallucination, EQ-Bench3, design)](https://baike.baidu.com/item/Grok%204.1/67007747)
