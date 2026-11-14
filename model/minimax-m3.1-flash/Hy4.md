- Source: MiniMax/MiniMax M3.1 Flash
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3.1 Flash (preview: M3.1-Flash-Preview)
- **Short description:** MiniMax's 2026-09-28 preview / 2026-10 GA text model on MiniMax Code, with native multimodality and a 1M context for everyday development (bug fix → full feature delivery). Per the project identity roster, the earlier `minimax-m3.1-flash-preview` stealth name `space-bunny` (and `cat-jam`/`beam` confusions) are separate resolved identities; `space-bunny` was merged into this canonical folder. A distinct model from `minimax-m3`.
- **Provider / access:** MiniMax Code platform, MiniMax API, Token Plan (quotas reset for all users at preview launch).
- **Release / knowledge:** preview public beta 2026-09-28 (GA October 2026 per third-party evaluation pages); knowledge cutoff: no verified public score found.
- **IDs:** `minimax-m3.1-flash`. No free Zen ID verified.
- **Context window:** **1,000,000 tokens**.
- **Modalities:** text and image in, text/code out (native multimodal); requirement understanding, edge-case handling, automatic regression-test completion, code-change impact verification. No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** **$0.15 / 1M input, $0.60 / 1M output, $0.015 / 1M cached input** (third-party CSDN launch analysis and 皮皮 AI evaluation page); a CSDN snippet also lists "0.15/0.15/0.60" — reported as ambiguous, with the clearer $0.15/$0.60 used. All-time flat pricing (no peak/off-peak tiers).
- **Architecture:** Proprietary, closed weights; parameter count not disclosed. **~118 tokens/s** output (third-party evaluation page).

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index v5: **29.0**, global **#20** (third-party 皮皮 AI evaluation page)
- Leads DeepSeek-V4.1-Flash-1017 on **OSWorld, ALE (Agents' Last Exam) and Automation-Bench** agent benchmarks (secondary CSDN comparison, directional, no exact scores)
- ~**70% lower overall agent task cost** than MiniMax M2 (secondary launch claim)
- Per-task cost **$0.42**; value **111 index points per dollar** (third-party evaluation page)
- Tau3-Banking / Tau2-Bench / GDPval-AA / Terminal-Bench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- AA Intelligence Index v5 **29.0 (#20)** as above
- GPQA Diamond / HLE / LCR / CritPt / Omniscience: no verified public score found for this exact ID

Coding:

- End-to-end development coverage: bug fixing, feature development, regression test auto-completion, change-impact verification (qualitative)
- DeepSeek-V4.1-Flash-1017 leads on **DeepSWE** in the same secondary comparison — a documented weakness
- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public absolute score found

Long context:

- 1M window with LOCA-Bench long-context agent evaluation mentioned in secondary coverage (no exact score in the retrieved excerpt); no MRCR / RULER / GraphWalks figure found

### Normalized scores (1–100)

- **Tool use: 87/100.** 1M context, claimed agent-benchmark leads over DeepSeek-V4.1-Flash-1017, end-to-end dev workflows and a $0.42 per-task cost; capped by those leads being directional/secondary and an AA index of 29.
- **Reasoning: 81/100.** AA Intelligence Index v5 29.0 (#20); capped by that modest index and no GPQA/HLE figure.
- **Context window: 92/100.** A verified 1M-token window with long-context agent evaluation at a Flash-tier price; capped by no published retrieval score.
- **Multimodal: 84/100.** Native multimodal input for visual/code workflows; capped by text/code-only output, no verified audio/video input, and no published multimodal benchmark.
- **Coding: 85/100.** End-to-end development lifecycle coverage and agent-benchmark results; capped by trailing DeepSeek on DeepSWE and no absolute SWE-bench/Terminal-Bench figure.
- **Cost efficiency: 97/100.** $0.15/$0.60 per 1M, $0.015 cache reads, flat all-day pricing, ~70% lower agent-task cost than M2 and 118 tok/s. Excluded from Overall.
- **Overall Score: 86/100.** Half-up mean of 87, 81, 92, 84, 85 = 85.8 → 86. Best fit: very high-volume, cost-sensitive coding agents and long-context development workflows.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike M3.1-Flash-Preview and MiniMax Code articles retrieved via public web search excerpt (preview release, 1M context, native multimodality, development-workflow coverage, Token Plan), plus secondary CSDN launch analysis and a third-party 皮皮 AI evaluation page for pricing, AA index 29.0/#20, per-task cost, speed and agent-benchmark comparisons — all explicitly labelled secondary/third-party. The ambiguous "0.15/0.15/0.60" price snippet is reported separately from the clearer $0.15/$0.60 rate card. Identity handling follows the project's generated roster: the `space-bunny` stealth alias was merged into this folder (never re-scaffolded), while `cat-jam` resolved to `beam` and `minimax-m3` is a separate model. Directional benchmark leads are not assigned numeric scores. Rows without verified figures are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [M3.1-Flash-Preview — 百度百科 (retrieved via search excerpt; release, 1M context, capabilities)](https://baike.baidu.com/item/M3.1-Flash-Preview/69186028)
  - [MiniMax M3.1 Flash 评测 — 皮皮 AI 评测榜 (third-party pricing, AA index, speed)](https://www.ppv9.com/model/minimax-m3-1-flash/)
  - [MiniMax M3.1 Flash 定价与跑分 — CSDN (retrieved via search excerpt; rate card, agent comparisons)](https://blog.csdn.net/CSDNzhizunbao/article/details/168543237)
