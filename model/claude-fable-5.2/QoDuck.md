# Claude Fable 5.2 — findings by QoDuck

- Source: Anthropic (`claude-fable-5-2`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.2
- **Short description:** Anthropic's general-availability frontier model (released 2026-11-09), the safeguarded configuration of the same underlying weights as Claude Mythos 5.2. Leads 14 of 16 capability rows in Anthropic's Table 8.1.A; marketed for demanding reasoning and long-horizon agentic/coding work. Distinct entry — not an alias of Fable 5.1 or Mythos 5.2.
- **Provider / access:** Claude API / Platform `claude-fable-5-2` (Messages API); AWS Bedrock, Google Cloud / Vertex, Microsoft Foundry; OpenRouter `anthropic/claude-fable-5.2`, Cursor, Claude Code, GitHub Copilot. Plans: Pro / Max / Ultra / Team / Enterprise (Pro includes Fable through 2026-11-16, then paid credits). No OpenCode Zen Free ID confirmed.
- **Release / knowledge:** Released **2026-11-09** (alongside Mythos 5.2); knowledge cutoff **June 2026** (confirmed in System Card §1). ~30% faster output than Fable 5.1.
- **IDs:** `claude-fable-5-2` (Claude API), `anthropic/claude-fable-5.2` (OpenRouter). No Free ID exists on OpenCode Zen.
- **Context window:** **1M** total tokens (System Card Table 8.1.A note: context "does not exceed 1M tokens"; corroborated by OpenRouter/Experiential listings); max output **128K** (platform docs max_tokens test @128,000 = 0% capped; Experiential listing). No single official spec line states both — verified across docs + third-party listings.
- **Modalities:** text + image in → text out (vision improvements cited; SWE-bench Multimodal 74.1% confirms image input); reasoning yes (Adaptive thinking, default effort **high** on Messages API); tool calls yes; JSON mode yes. No native audio/video input.
- **Pricing (as of 2026-11-10):** **$8 in / $40 out** per 1M (20% cut from Fable 5.1's $10/$50); cache read **$0.20** (0.025× input, official); **Fast mode $16/$80** (2× base, up to 2.5× output tokens/sec); US-only inference 1.1× multiplier. Paid.
- **Architecture:** proprietary (parameter count, training recipe undisclosed). Fable 5.2 and Mythos 5.2 share one model; Fable adds biology/cyber safeguards (same policy as Opus 5.5).

### Raw benchmarks found

> Fable 5.2 results use adaptive thinking at max effort, averaged over five trials (System Card Table 8.1.A), unless noted. "Vendor" = Anthropic System Card; third-party harnesses named where applicable.

Agent / tool use:

- GDPval-AA v2.1 (**vendor / Artificial Analysis framework**): **1831 Elo** (Fable 5.1 1763; **trails Opus 5.5 1866**; Astra 1584).
- Terminal-Bench 4.0 (**vendor**, Claude Code --bare, max effort, 660 trials, SE ±1.8): **67.6%** with safeguards (#1; Opus 5.5 66.4%, Fable 5.1 55.8%, Astra 57.9%; Mythos 5.2 no-safeguards 70.5%).
- Terminal-Bench-Science 0.1 (**vendor**, 700 trials, SE ±4.3): **74.6%** (Mythos 5.2 75.3%, Opus 5.5 58.7%, Fable 5.1 52.6%, Astra 68.1%).
- OSWorld 2.1 (offline set, partial) (**vendor**): **89.3%** (Fable 5.1 83.5%, Opus 5.5 87.2%, Astra 79.5%).
- AutomationBench (**vendor**): **51.4%** (Fable 5.1 31.4%, Opus 5.5 42.5%, Astra 41.4%; Gemini 4 Carbon beats Fable at 53.9% per kie.ai).
- Remote Labor Index (**vendor**, default effort): **41.3%** of freelance projects at least as well as a human pro (Fable 5.1 17.9%, Opus 5.5 21.3%, Astra 20.8%).
- AA-Briefcase v1.1 (**vendor / Artificial Analysis**): Rubric **66.1**, ELO **1785** (trails Opus 5.5 ELO 1800).
- FrontierSWE v2 (**Proximal, independent**, 34 ultra-long-horizon tasks, 20h budget, mean@5): **69.9% — #1** (Astra 65.5%, Opus 5.5 62.3%, Sonnet 5.5 61.9%, Fable 5.1 56.3%, Argon 55.0%); highest/tied on 20 of 34 tasks.
- Chartography (**vendor**): no tools **73.4%**, with tools **91.6%**.
- Multi-agent feat (**vendor**): a 1,000-agent team (earlier snapshot) completed a Lean proof of Fermat's Last Theorem within 30 hours.
- Tau3-Banking / Tau2-Bench: no verified public score found.
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: no verified public score found.

Reasoning / knowledge:

- HLE (**vendor**, max effort, mean@5): **73.2% no tools / 74.2% with tools** (Fable 5.1 60.9/65.6, Opus 5.5 64.4/67.7, Astra 57.2 w-tools).
- GPQA Diamond: no verified public score found (Artificial Analysis removed GPQA Diamond from its Intelligence Index in Sept 2026).
- ARC-AGI-3 (**ARC Prize Foundation, independent/verified**): **79.26% Standard harness / 97.72% Provider Adapter** at **high** effort; at max effort 65.66% Standard / 94.90% Provider Adapter (Astra 62.7%/98.6% at max).
- WANDR (relaxed score) (**vendor**): **82.1%** (Fable 5.1 68.7, Opus 5.5 72.3).
- Artificial Analysis Intelligence Index (**third-party**): **65 — #1** at max effort (Carbon 60, Opus 5.5 59, Astra 57, Fable 5.1 49).
- Epoch Capabilities Index: public Epoch ECI ~**174** (kie.ai estimate); Anthropic internal **AECI 177.12** for the shared model at max effort (Mythos 5.2 config; System Card Table 2.3.5.3.A). AECI uses internal benchmarks and is **not comparable** to Epoch's public leaderboard or earlier system cards.
- LCR / MLCR / CritPt / Omniscience Accuracy / Hallucination Rate: no verified public score found.

Coding:

- SWE-bench Pro (**vendor**, mean@5): **93.0%** (Fable 5.1 81.2%, Opus 5.5 89.9%). Platform docs separately report **96.3%** at high effort on a 463-problem subset ($1.39/solved task) — different split/effort.
- SWE-bench Multilingual (**vendor**, 300 problems / 9 languages): **96.6%** (Fable 5.1 89.1%, Opus 5.5 93.9%).
- SWE-bench Multimodal (**vendor**, adds screenshots/mockups): **74.1%** (Fable 5.1 54.7%, Opus 5.5 61.4%).
- DeepSWE v1.1 (**vendor**, 113 long-horizon tasks written from scratch, mean@5): **74.3%**.
- FrontierCode 2.0 (**Cognition, independent**, 132 tasks, mean@5): **49.1%** at xhigh (peak); 45.7% at max, 45.3% high, 37.6% medium, 34.2% low (Opus 5.5 45.5%, Astra 42.8%, Fable 5.1 32.4%).
- CursorBench 4.0 (**Cursor, independent**, production harness): **60.0%** at max effort (#1; Opus 5.5 57.8%); 56.3% xhigh, 56.9% high, 54.8% medium, 53.2% low.
- LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found.

Long context:

- 1M context window (System Card: evaluation context "does not exceed 1M tokens"); **no long-context retrieval figure** (MRCR / RULER / GraphWalks) reported for Fable 5.2.

### Conflicting-results notes

1. **SWE-bench Pro split/effort:** System Card **93.0%** (standard full set, max effort, mean@5) vs platform docs **96.3%** (high effort, 463-problem subset). Fable 5.1 likewise reads 81.2% (card) vs 92.4% (docs subset) — the 463 subset is a different/easier split. Scored on the System Card's standard 93.0%.
2. **FrontierCode 2.0 effort + timeout caveat:** peak **49.1%** at xhigh, but only 45.7% at max; if 22 timed-out attempts (of 660) were zeroed, max drops to **44.4%** (below Opus 5.5's 45.5%). The 0.2-pt max-effort gap vs Opus is within noise (single Cognition result, no CI). Table 8.1.A reports best-effort 49.1%.
3. **ARC-AGI-3 harness + effort non-monotonicity:** Standard harness peaks at **high** effort (79.26%) and falls at max (65.66%); Provider Adapter reads 97.72% (high) / 94.90% (max). The two harnesses are not interchangeable.
4. **Three different "Index" numbers:** AA Intelligence Index **65** (public, third-party, #1) ≠ Epoch public ECI **~174** (kie.ai) ≠ Anthropic internal **AECI 177.12** (Mythos config, max effort; rescaled each release, not comparable across cards or to Epoch's public board).
5. **Only two regressions vs Opus 5.5:** GDPval-AA v2.1 (1831 < 1866) and AA-Briefcase ELO (1785 < 1800) — the 2 of 16 rows Opus 5.5 leads.
6. **DeepResearch Bench II regression (platform docs):** Fable 5.2 scored **4.7–7.0 points lower** than Fable 5.1 (though 20–61% cheaper per effort) — a regression on agentic search despite the overall frontier lead.
7. **Shared weights / safeguards:** Fable 5.2 = Mythos 5.2 underlying model; Fable's bio/cyber safeguards cost ~3 pts on TB4 (67.6% vs Mythos 70.5%). De Novo Binder Design (85.1) and CVE Rediscovery (89.6) are Mythos-config no-safeguard rows, not Fable results.

### Normalized scores (1–100)

- **Tool use: 95/100.** GDPval-AA 1831 clears the ~1750 anchor; TB4.0 67.6% (#1), OSWorld 2.1 89.3%, RLI 41.3%, FrontierSWE v2 69.9% (#1), 1,000-agent Fermat proof. Capped below 97 because GDPval-AA and AA-Briefcase Elo trail Opus 5.5 and AutomationBench (51.4%) trails Carbon.
- **Reasoning: 96/100.** HLE 74.2% w-tools (far above the 40% anchor), AA Index 65 (#1, >60), ARC-AGI-3 verified 79.26% Standard. Capped below 98 by no published GPQA Diamond and GDPval trailing Opus.
- **Context window: 95/100.** 1M total window (≥1M tier); no ≥98% retrieval-at-512K figure reported, so not 100.
- **Multimodal: 68/100.** Text + image input → text output (+image tier 60–70); strong SWE-bench Multimodal 74.1%, but no native audio/video input.
- **Coding: 96/100.** DeepSWE v1.1 74.3% (clears 74% anchor), SWE-bench Pro 93.0% / Multilingual 96.6%, FrontierSWE v2 69.9% (#1), CursorBench 4.0 60.0% (independent #1), TB4.0 67.6% (#1). Capped below 98 by FrontierCode 2.0 peaking at 49.1% (44.4% if timeouts zeroed) and the SWE-bench Pro split conflict.
- **Cost efficiency: 38/100.** $8/$40 sits near the $10/$50≈30 anchor (20% cheaper than Fable 5.1); Fast mode doubles to $16/$80. Platform docs note Opus 5.5 matches Fable on SWE-bench Pro high for ~half the cost — premium pricing for marginal gains.
- **Overall Score: 90.0/100.** Mean of the five quality dims (95+96+95+68+96)/5 = 90.0. Best fit: the current frontier leader for long-horizon agentic coding and hard reasoning, if budget allows — otherwise Opus 5.5 delivers near-parity at roughly half the cost.

---

## Signature

- Provided by: **QoDuck (Qoder agent)** — 2026-11-10
- Method: public internet research — official Anthropic System Card (Fable 5.2 & Mythos 5.2, 2026-11-09, extracted via pdftotext) and Claude Platform docs, plus independent sources (Artificial Analysis Intelligence Index, ARC Prize Foundation ARC-AGI-3, Cursor CursorBench, Proximal FrontierSWE) and secondary reviews (kie.ai, OpenRouter). ≥3 independent web searches plus primary-doc/PDF extraction; vendor vs third-party and cross-source conflicts reconciled above. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Claude Fable 5.2 & Mythos 5.2 System Card (PDF)](https://assets.claude.com/27d60918d218125e7504bc7354c4b4626ec56b11.pdf)
  - [Claude Platform — Optimizing for cost and intelligence](https://platform.claude.com/docs/en/about-claude/models/optimizing-for-cost-and-intelligence)
  - [Artificial Analysis — Intelligence Index](https://artificialanalysis.ai/)
  - [Proximal — FrontierSWE v2](https://www.frontierswe.com/blog/v2)
  - [ARC Prize Foundation — ARC-AGI-3](https://arcprize.org/)
  - [kie.ai — Claude Fable 5.2 vs GPT-6](https://kie.ai/blog/claude-fable-5-2-vs-gpt-6)
  - [kie.ai — What Is Claude Fable 5.2? Status & Cost](https://kie.ai/blog/what-is-claude-fable-5-2)
  - [OpenRouter — Fable 5.1 vs Fable 5.2](https://openrouter.ai/compare/anthropic/claude-fable-5.1/anthropic/claude-fable-5.2)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.