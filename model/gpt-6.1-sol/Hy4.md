- Source: OpenAI/GPT-6.1 Sol
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol
- **Short description:** OpenAI's 2026-09-29 "daily workhorse" upgrade to GPT-6 Sol, positioned as near-GPT-6-Astra performance on agentic coding, computer use and professional workflows at one fifth of Astra's token price. A distinct model; the Ultrafast variant (2026-10-08) is a serving profile, not a separate model.
- **Provider / access:** ChatGPT Work and Codex for Plus / Pro / Business / Enterprise / Edu subscribers; OpenAI API with model ID `gpt-6.1-sol`. Four modes: **Standard, Batch, Flex, Fast**; Ultrafast available in API, Codex and ChatGPT Work.
- **Release / knowledge:** 2026-09-29; Ultrafast 2026-10-08. Knowledge cutoff: no verified public score found.
- **IDs:** `gpt-6.1-sol`. No free Zen ID verified.
- **Context window:** input pricing splits at **272,000 tokens** — short context (input ≤272K) vs long context (input >272K); a third-party evaluation page lists **1,050,000 tokens** context with up to 128,000 output. No vendor-stated total window was verifiable this pass, so the exact figure is reported as a third-party one.
- **Modalities:** text and image in, text out; agentic coding, computer use, professional document work (GDP.pdf), automation workflows, terminal/science tasks; extended reasoning with configurable effort; native tool use and prompt caching with explicit cache writes. No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** full official short-context rate card per 1M tokens (Standard / Batch / Flex / Fast): input **$2.00 / $1.00 / $1.00 / $4.00**; cached input **$0.10 / $0.05 / $0.05 / $0.20**; cache writes **$2.50 / $1.25 / $1.25 / $5.00**; output **$10.00 / $5.00 / $5.00 / $20.00**. Long context (>272K): input **$4 / $2 / $2 / $8**, cached input **$0.20 / $0.10 / $0.10 / $0.40**, cache writes **$5 / $2.50 / $2.50 / $10**, output **$15 / $7.50 / $7.50 / $30**. Ultrafast: **$12 input / $60 output** per 1M.
- **Architecture:** Proprietary, closed weights; parameter count not disclosed. Internally rated **"Critical"** for cyber capability under OpenAI's Preparedness Framework.

### Raw benchmarks found

Agent / tool use:

- AutomationBench (medium effort): **+2.2 points** over Opus 5.5 at ~1/3 the cost; **+4.8 points** over GPT-6 Sol at the same effort (exact absolute score not published)
- OSWorld 2.0 (offline, max effort): **+7 points** over GPT-6 Sol at less than half the cost; **−2.1 points** vs GPT-6 Astra at ~1/7 the per-task cost (absolute score not published)
- GDP.pdf professional documents: better than Opus 5.5 at **less than half** the task cost (no absolute score)
- Terminal-Bench Science 0.1 (max effort): **more than 2x** GPT-6 Sol's score; mean per-task cost **$5.47** (Opus 5.5 $23.21, GPT-6 Astra $23.80)
- Fact error rate at low effort: **7.7%**, down from GPT-6 Sol's **11.4%** (~32% reduction); within **1.9%** of Astra's error rate across all reasoning settings
- Tau3-Banking / Tau2-Bench / GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- AA Intelligence Index v5: **54.6**, global **#5** per a third-party evaluation page (96% of Astra's intelligence at 1/5 the price, per that page's framing)
- GPQA Diamond / HLE / LCR / CritPt / Omniscience: no verified public score found

Coding:

- DeepSWE v1.1: reaches **GPT-6 Astra level** at high effort with ~1/5 the task cost; at lower effort/cost **+6.4 points** over GPT-6 Sol's best
- SWE-bench Verified / Terminal-Bench 4.0 / LiveCodeBench / SciCode / Vibe Code Bench / FrontierSWE: no verified public score found

Long context:

- Explicit short/long-context pricing split at 272K input tokens with distinct cache and output rates; no MRCR / RULER / GraphWalks figure found — no verified public score found

Safety (context, not scored): system card §8 monitorability — followed format/control instructions on 750–1,250-token chains of thought **44.8%** of the time (GPT-5.6 Sol 16.1%); arbitrary code execution success in internal zero-day development tests **21.5%** (GPT-6 Sol 5.5%, GPT-6 Astra 31.5%); no attempts to bypass automated safety reviewers observed.

### Normalized scores (1–100)

- **Tool use: 92/100.** Beats Opus 5.5 on AutomationBench and GDP.pdf at a fraction of the cost, +7 on OSWorld 2.0 vs GPT-6 Sol, and >2x GPT-6 Sol on Terminal-Bench Science; capped by no published absolute agent scores and no τ-bench/GDPval figure.
- **Reasoning: 91/100.** AA Intelligence Index v5 54.6 at #5 globally with a 7.7% fact-error rate close to Astra's; capped by trailing the 65-point frontier and no GPQA/HLE figures.
- **Context window: 91/100.** A 1.05M-token third-party-reported window with an explicit 272K long-context pricing boundary and durable caching; capped by no vendor-verified total figure and no long-context retrieval measurement.
- **Multimodal: 82/100.** Text/image input with strong document and computer-use task results; capped by text-only output, no verified audio/video input, and no multimodal benchmark score.
- **Coding: 92/100.** DeepSWE v1.1 at Astra level for ~1/5 the task cost and +6.4 over GPT-6 Sol; capped by no absolute DeepSWE figure and no SWE-bench Verified / Terminal-Bench 4.0 number.
- **Cost efficiency: 95/100.** A $2/$10 standard rate (one fifth of Astra), $0.10 cached input, $1/$5 Batch & Flex modes, and $5.47 vs $23+ per science task — the strongest value in the frontier tier. Excluded from Overall.
- **Overall Score: 90/100.** Half-up mean of 92, 91, 91, 82, 92 = 89.6 → 90. Best fit: high-volume daily agentic coding, automation and professional document workflows where near-flagship results at one fifth the price dominate.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike GPT-6.1 Sol article (full four-mode short/long-context rate card, model ID, 272K boundary, relative benchmark deltas, safety system-card figures), plus a third-party evaluation page for the AA index value and the 1.05M window — labelled as third-party. Vendor-reported relative deltas without published absolute scores are labelled as deltas, never assigned an absolute number. Ultrafast is treated as a serving profile, not a separate model. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass.
  - [GPT-6.1 Sol — 百度百科 (full rate card, model ID, benchmark deltas, system card)](https://baike.baidu.com/item/GPT-6.1%20Sol/69224883)
  - [GPT-6.1 Sol 评测 · 分数 / 价格 / 速度 — 皮皮 AI 评测榜 (AA index 54.6, 1.05M window)](https://www.ppv9.com/model/gpt-6-1-sol/)
