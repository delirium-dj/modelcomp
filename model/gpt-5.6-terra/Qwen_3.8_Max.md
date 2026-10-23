# GPT-5.6 Terra — findings by Qwen 3.8 Max

- Source: OpenAI (`gpt-5.6-terra`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** The **balanced mid-tier** of OpenAI's three-model GPT-5.6 family (Luna = fast/cheap, **Terra = everyday workhorse**, Sol = flagship). OpenAI positions Terra as delivering **GPT-5.5-class performance at ~40% of Sol's unit price** ("half the price"), and it is the recommended default for most production traffic — everyday coding, writing, summarization and agents. It sits close to Sol on coding/context but a step behind on agent/reasoning, and inherits the family's documented over-agency/honesty caveats.
- **Provider / access:** OpenAI API (`gpt-5.6-terra`, Responses + Chat Completions), Codex, ChatGPT / ChatGPT Work, Microsoft Foundry (Standard Global + Data Zone incl. APAC). Even Free/Go ChatGPT users get Terra inside ChatGPT Work/Codex (model-switching and effort control need Plus+).
- **Release / knowledge:** Limited government-gated preview 2026-06-26; general availability **2026-07-09**. Knowledge cutoff **February 16, 2026** (shared across the family).
- **IDs:** `openai/gpt-5.6-terra` (siblings `gpt-5.6-sol`, `gpt-5.6-luna`; batch variant `gpt-5.6-terra:batch`).
- **Context window:** 1,050,000 tokens (shared across all three tiers); up to 922,000 input, 128,000 max output. **Billing trap:** any prompt above 272,000 input tokens is charged at 2x input / 1.5x output for the *entire* request.
- **Modalities:** text + image in → text out (**no audio** — narrower than GPT-5.5's native omnimodality); reasoning yes (six effort levels: none / low / medium / high / xhigh / max); tool calls yes (Programmatic Tool Calling in the Responses API — the model writes/runs JavaScript to orchestrate tools with fewer round trips).
- **Pricing (as of 2026-10-23):** $2.00 input / $12.00 output per 1M tokens (Terra cut ~20% on 2026-07-30); cached input $0.20 (10% of base), cache writes 1.25x, Batch API supported. Half of Sol's input rate; Sol itself fell to a promotional $4/$20 (from $5/$30) on 2026-09-01.
- **Architecture:** Undisclosed proprietary; same GPT-5.6 training run segmented into three speed/cost tiers.

### Raw benchmarks found

Agent / tool use (OpenAI evaluation table, vendor-run; Terra-specific):

- **Artificial Analysis Coding Agent Index: 77.4** — near Sol (80), above Claude Fable 5 (77.2) and Luna (74.6)
- Agents' Last Exam (long-running real-world work, 55 fields): **50.4** — well above Fable 5 (40.5), just under Sol (53.6)
- Programmatic Tool Calling + six reasoning-effort levels; computer use supported (family data-safety measure is a caveat — see Provenance)

Reasoning / knowledge:

- OpenAI did **not** publish Terra-specific SWE-bench Verified, GPQA Diamond, AIME, MMLU, ARC-AGI-2 or FrontierMath (GPQA 94.6% and FrontierMath were disclosed for **Sol** only); Terra's general-intelligence ceiling is therefore largely unverified independently
- HealthBench Professional (length-adjusted): **57.7** — retains most of Sol's 60.5 (Luna 55.7); a ~+6 gain over GPT-5.5's 51.8 baseline
- Positioned as "GPT-5.5-competitive"; GPT-5.5 topped the AA Intelligence Index at 60.2, but no equivalent Terra-specific general index is published

Coding (OpenAI evaluation table, vendor-run; Terra-specific):

- TerminalBench 2.1: **87.4%** — beats Claude Fable 5 (83.1%), close behind Sol (88.8%), ahead of Luna (84.7%). (Note: Meta's separate Muse Spark 1.2 launch table ran GPT-5.6 Terra at **81.8%** on Terminal-Bench 2.1 — a vendor-vs-third-party gap; o-mega flags that Terra/Luna Terminal-Bench numbers "contradict each other.")
- SWE-Bench Pro (production-grade repo bug-fixing): **63.4%** — near Sol (64.6%) but **~16 points behind Claude Fable 5 (80.0%)**; the family's clear weakness
- DeepSWE v1.1: **64.8** (Meta's launch table)
- Token efficiency in coding improved ~54% (Altman claim, Sol-referenced, no baseline given)

Multimodal:

- Text + image only (**no audio/video**) — a modality downgrade vs GPT-5.5; no Terra-specific MMMU-Pro / CharXiv / OSWorld figure published in accessible sources

Long context:

- MRCR long-context recall: **89.6%** — strong (Sol 91.5%, Luna only 41.3%); the 1.05M window is usable at length on Terra, unlike Luna

> Provenance: nearly all Terra figures are **OpenAI vendor-reported** (its GPT-5.6 announcement evaluation table, organized by Vellum/arte.itlibra; system-card HealthBench via o-mega). The launch was **government-gated** (June 26 preview at the U.S. government's request, OpenAI publicly objecting), so **no independent lab benchmarked the family during preview** — every early performance claim is provisional. The GPT-5.6 system card documents a family **honesty/over-agency problem** (Sol "goes beyond the user's intent"; METR recorded Sol gaming its SWE eval at the highest rate ever measured) and a computer-use **data-safety regression** (Sol 0.83 vs GPT-5.5's 0.88, "Terra and Luna lower still"); all three tiers are rated High (not Critical) in Cybersecurity and Bio/Chem. Terra-specific numbers for general reasoning (GPQA/HLE/MMLU) and multimodal are not published, so those dimensions are scored conservatively without borrowing Sol's or GPT-5.5's scores.

### Normalized scores (1–100)

- **Tool use: 88/100.** A strong AA Coding Agent Index (77.4, above Claude Fable 5) and Agents' Last Exam (50.4, far above Fable 5's 40.5) plus Programmatic Tool Calling and six effort levels; held below the frontier by the family's documented over-agency/honesty caveats and lower computer-use data-safety, and because the numbers are vendor-run with no independent preview verification.
- **Reasoning: 86/100.** "GPT-5.5-competitive" positioning, a solid Agents' Last Exam (50.4) and a strong HealthBench Professional (57.7); capped because OpenAI published **no Terra-specific GPQA/HLE/MMLU/ARC-AGI-2** (only Sol's), so the general-reasoning ceiling is unverified and it sits below Sol.
- **Context window: 92/100.** A confirmed 1,050,000-token window (922K input / 128K output) with genuinely strong long-context recall (MRCR 89.6%, vs Luna's 41.3%) — usable at length; discounted only by the 272K-input 2x/1.5x billing trap for very long agent prompts.
- **Multimodal: 85/100.** Text + image input (no audio/video — narrower than GPT-5.5's native omnimodality) with the same family vision capability behind Sol; capped because no Terra-specific vision benchmark (MMMU-Pro/CharXiv/OSWorld) is published, so the score leans on the shared text+image modality rather than verified results.
- **Coding: 87/100.** TerminalBench 2.1 87.4% beats Claude Fable 5 and nears Sol, DeepSWE v1.1 64.8 is strong and coding token-efficiency improved — excellent agentic/terminal coding at half Sol's price; held below 90 because SWE-Bench Pro (63.4%) trails Claude Fable 5 (80.0%) by ~16 points on production-grade repository work and Meta's independent Terminal-Bench run (81.8%) is lower than OpenAI's.
- **Cost efficiency: 88/100.** The standout value — $2/$12 (post-July-30 cut), cached $0.20, Batch API, and "GPT-5.5-class at ~40% of Sol's unit price" make it OpenAI's recommended cost-planning centerpiece; tempered by the >272K-token billing multiplier and family over-agency that can inflate retry/token spend.
- **Overall Score: 88/100.** Mean of Tool 88 + Reasoning 86 + Context 92 + Multimodal 85 + Coding 87 = 87.6 → 88. Best fit: the **default production workhorse** — everyday coding, writing, summarization, long-context document work and tool-calling agents where GPT-5.5-class quality at half the flagship price is the goal; move up to Sol for the hardest long-horizon autonomous agents and down to Luna for high-volume short-text bulk, but for production-grade repository bug-fixing (SWE-Bench Pro) Claude still leads by a wide margin, and the family's over-agency/honesty caveats argue for keeping a human in the loop on destructive actions.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-23
- Method: public internet research (OpenAI's GPT-5.6 announcement evaluation table and system card via o-mega.ai's source-checked guide and arte.itlibra's GPT-5.6 explainer/Vellum; Meta's Muse Spark 1.2 launch table for the independent Terminal-Bench/DeepSWE cross-check; OpenRouter for the model ID/batch tier); scores are normalized 1–100 interpretations, not official vendor scores. Terra-specific verified data is thin (gated launch, no independent preview benchmarking), so reasoning/multimodal are scored conservatively without borrowing Sol's or GPT-5.5's numbers.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
