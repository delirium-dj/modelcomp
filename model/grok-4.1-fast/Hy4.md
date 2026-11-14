- Source: xAI/Grok 4.1 Fast
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 Fast
- **Short description:** The fast, low-cost serving variant of xAI's Grok 4.1 generation (2025-11-18), optimised with end-to-end tool-use RL for agentic tool calling and speed. A distinct model; `grok-4.1` (base) and `grok-4-fast` (2025-09-20, 2M window) are separate tracked entries.
- **Provider / access:** API with an Auto mode that automatically handles complex queries; real-time search, code execution and X-platform data integration; free two-week trial window to 2025-12-03. Third-party platforms.
- **Release / knowledge:** Grok 4.1 generation 2025-11-18 (Fast variant circa 2025-11-20/21); knowledge cutoff: no verified public score found.
- **IDs:** `grok-4.1-fast` family ID as cited. No free Zen ID verified.
- **Context window:** **~2,000,000 tokens** (Baidu Baike Grok 4 Fast article for the 2M design; secondary CSDN for "nearly 2M" on Grok 4.1 Fast) — reported with provenance as a near-2M window, the largest in this comparison set.
- **Modalities:** text in, text out; real-time search, code execution, X-platform data, tool calling, multi-step agent workflows. Grok 4.1 base added system-level multimodal input response mechanisms; not separately verified for the Fast variant.
- **Pricing (as of 2026-11-14):** **$0.20 / 1M input, $0.05 / 1M cached input, $0.50 / 1M output**, plus **$5 per 1,000 successful agent-tool API calls** (36Kr launch coverage, secondary).
- **Architecture:** Proprietary, closed weights; parameter count not disclosed. End-to-end tool-use reinforcement learning; a smart reasoning model used as the reward model.

### Raw benchmarks found

Agent / tool use:

- LMArena text leaderboard (Grok 4.1 base, thinking mode): **1483 Elo, #1**; non-reasoning mode **1465 Elo, #2** — base-generation figures, labelled lineage
- Silent two-week blind test user-preference probability: **64.78%** (base generation, lineage)
- Factual hallucination rate on information-retrieval prompts: **12.09% → 4.22%** (base generation, lineage)
- EQ-Bench3: the two Grok 4.1 modes took the top two places (base generation, lineage)
- Near-2M context with Auto mode for complex queries, real-time search and code execution (Fast variant, qualitative)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Creative writing benchmarks: 2nd and 3rd place (base generation, lineage; no scores)
- Automated math theorem proving and verification with DeepSeek-Math-V2 (base generation, qualitative)
- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found for the Fast variant

Coding:

- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- Near-2M-token window; no MRCR / RULER / GraphWalks figure found — no verified public score found. Documented caveat: users reported that Grok 4.1's emotional-intelligence focus traded away precision in programming, law and medicine (secondary analysis).

### Normalized scores (1–100)

- **Tool use: 85/100.** End-to-end tool-use RL, Auto mode, real-time search/code execution/X-data integration, and a 4.22% hallucination rate (base lineage); capped by those figures being measured under the base Grok 4.1 ID and no scored agent harness.
- **Reasoning: 80/100.** #1 LMArena 1483 Elo (base lineage) and theorem-proving support; capped by reported precision losses in professional domains and no numeric reasoning benchmark for the Fast variant.
- **Context window: 96/100.** A near-2,000,000-token window — the largest verified here — with Auto-mode query handling; capped by no long-context retrieval measurement and the figure coming partly from the 4 Fast lineage article.
- **Multimodal: 76/100.** Scored conservatively: multimodal response mechanisms are documented for the Grok 4.1 base, not verified for the Fast serving variant; text-only output.
- **Coding: 78/100.** Code execution tooling and a code-capable generation; capped by no published coding benchmark and documented precision trade-offs.
- **Cost efficiency: 96/100.** $0.20/$0.50 per 1M with $0.05 cached reads, a free trial window and a huge context; capped by the separate agent-tool call fee. Excluded from Overall.
- **Overall Score: 83/100.** Half-up mean of 85, 80, 96, 76, 78 = 83.0 → 83. Best fit: very long-context, high-volume tool-calling agents and real-time search workflows on a budget; not precision-critical professional reasoning.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Grok 4.1 article retrieved via public web search excerpt (LMArena Elo, hallucination reduction, EQ-Bench3, blind-test preference, architecture), the Baidu Baike Grok 4 Fast excerpt for the 2M-context design, and secondary 36Kr / CSDN coverage for the Fast variant's pricing, near-2M window and free trial — all labelled secondary. Figures measured under the **base Grok 4.1** or **Grok 4 Fast** IDs are explicitly labelled lineage and never merged into the Fast variant's own rows. `grok-4.1` and `grok-4-fast` are separate tracked folders here. Rows without verified figures are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [Grok 4.1 — 百度百科 (retrieved via search excerpt; base-generation benchmarks)](https://baike.baidu.com/item/Grok%204.1/67007747)
  - [Grok 4 Fast — 百度百科 (retrieved via search excerpt; 2M context, tool-use RL)](https://baike.baidu.com/item/Grok%204%20Fast/66778812)
  - [低成本叫板 GPT-5.1，马斯克杀入智能体 — 36氪 (retrieved via search excerpt; Fast pricing)](https://36kr.com/p/3560921995246723)
