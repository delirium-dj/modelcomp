- Source: OpenAI/GPT-6.1 Terra
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Terra
- **Short description:** OpenAI's 2026-10-27 low-cost computer-operation model, built for high-frequency, repetitive desktop/UI agent work (visual reasoning, interface navigation, form filling, invoice processing, technical-drawing interpretation, video editing). A distinct SKU; GPT-6.1 Sol and GPT-6 Astra target deeper research and complex coding.
- **Provider / access:** ChatGPT Work and Codex (Plus / Pro / Enterprise / Edu) and the developer API with model name `gpt-6.1-terra`. Also adopted as a judge model in Microsoft EF Core PR #39217 (replacing gpt-5.6-terra across 18 evaluation configs) and tested in GitHub Copilot production code review.
- **Release / knowledge:** 2026-10-27 (local-time 2026-10-26 announcement); knowledge cutoff: no verified public score found.
- **IDs:** `gpt-6.1-terra`. Arena stealth names `shooting-star-red-alpha` / `shooting-star-green-alpha` were speculated to be Terra variants — unverified, not used as IDs. No free Zen ID verified.
- **Context window:** no verified figure in the retrieved page — no verified public score found.
- **Modalities:** image and text in, text out; visual reasoning, computer use (desktop software operation), technical-drawing reading, form filling, video editing. No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** standard API price **50% below GPT-5.6 Terra and GPT-6.1 Sol**; input and output tokens are each **1/10 of GPT-6 Astra's**; **~1/9 the per-task cost of Claude Opus 5.5** and **1/4 of its price**, with **3x its token efficiency** (launch coverage, labelled secondary). No exact per-1M rate card in the retrieved primary page.
- **Architecture:** Proprietary, closed weights; parameter count not disclosed. Rated **Critical** for cyber capability under OpenAI's Preparedness Framework, so it inherits GPT-6 Astra's safeguards and GPT-6-series alignment improvements.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0 (max reasoning effort): **50.3%** task success — more than double GPT-5.6 Terra's published **21.5%**
- Coding Agent Index v2.0: **48** (GPT-6.1 Sol 54, GPT-6 Luna 31)
- Agents' Last Exam (medium effort): **+15 percentage points** over GPT-5.6 Terra
- OSWorld 2.1 (medium effort): exceeds GPT-5.6 Terra's previous best
- MMMU-Pro: above GPT-5.6 Terra at all reasoning settings (no absolute score published)
- Terminal-Bench-Science 0.1: above GPT-6.1 Sol, within **<5 points** of Claude Opus 5.5 (no absolute score published)
- Tau3-Banking / Tau2-Bench / GDPval-AA / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index (max effort): **+6 points** over GPT-5.6 Terra (no absolute number in the retrieved page)
- AA-Omniscience: guessing-when-unknown rate **38%** vs GPT-5.6 Terra's **88%** (−50 points) with **+2 points** accuracy
- Internal factuality: low-effort error rate **53.6% → 16.7%**; max-effort error rate down **18 points to 4.3%**
- GPQA Diamond / HLE / LCR / CritPt: no verified public score found

Coding:

- Terminal-Bench 4.0 **50.3%** and Coding Agent Index v2.0 **48** as above; OpenAI explicitly advises GPT-6.1 Sol or GPT-6 Astra for the most complex programming — a documented capability boundary
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- No MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 91/100.** 50.3% Terminal-Bench 4.0 (2.3x its predecessor), +15 on Agents' Last Exam, OSWorld 2.1 above the prior best, and a sharp reduction in guessing/errors — plus real production adoption as a judge model; capped by no τ-bench/AutomationBench figure and no absolute MMMU-Pro/OSWorld numbers.
- **Reasoning: 88/100.** AA index +6, AA-Omniscience 38% guessing (from 88%) and a 4.3% max-effort error rate; capped by no absolute index/ARC figure and by being positioned below Sol/Astra.
- **Context window: 85/100.** Scored conservatively: the retrieved primary page publishes no context-window figure, so no higher score is justified despite long agentic workflows.
- **Multimodal: 87/100.** Genuine visual reasoning and computer use — technical drawings, forms, UI navigation, video editing — with MMMU-Pro gains at every effort level; capped by text-only output, no verified audio input, and no published absolute multimodal score.
- **Coding: 87/100.** 50.3% Terminal-Bench 4.0 and Coding Agent Index 48; capped by OpenAI's own advice to use Sol/Astra for complex programming and no SWE-bench figure.
- **Cost efficiency: 96/100.** 50% below GPT-5.6 Terra / GPT-6.1 Sol, 1/10 of Astra, ~1/9 per-task cost and 3x token efficiency vs Opus 5.5 — outstanding value for high-frequency agent work. Excluded from Overall.
- **Overall Score: 88/100.** Half-up mean of 91, 88, 85, 87, 87 = 87.6 → 88. Best fit: high-volume computer-operation and UI-automation agents where per-task cost dominates; escalate complex coding to Sol/Astra.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike GPT-6.1 Terra article (release, model name, Terminal-Bench 4.0 50.3%, Coding Agent Index 48, AA-Omniscience 38%/88%, internal error rates, Preparedness Framework rating, product positioning). Launch-coverage price ratios (1/10 of Astra, 1/9 of Opus 5.5, 3x token efficiency) are labelled secondary. Relative deltas without absolute scores are reported as deltas, never assigned an absolute number; the speculative Arena stealth names are not used as IDs. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass.
  - [GPT-6.1 Terra — 百度百科 (release, benchmarks, factuality, safety, positioning)](https://baike.baidu.com/item/GPT-6.1%20Terra/69578481)
