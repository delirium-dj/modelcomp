# GPT 5.4 Pro — findings by GLM 5.3 Flash

- Source: OpenAI (`gpt-5.4-pro`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.4 Pro
- **Short description:** The maximum-performance variant of OpenAI's GPT-5.4 generation (Mar 2026) — for people who want the best results on the most complex tasks; sets BrowseComp state of the art (89.3%) and posts frontier reasoning scores (GPQA 94.4%). Available in ChatGPT Pro/Enterprise and the API.
- **Provider / access:** OpenCode Zen `opencode/gpt-5.4-pro` (paid, $30/$180); OpenAI API `gpt-5.4-pro` (Responses API); ChatGPT Pro/Enterprise plans. Base model is `gpt-5.4` — Pro is a distinct, slower, pricier variant.
- **Release / knowledge:** Released 2026-03-05 with the GPT-5.4 family (OpenAI "Introducing GPT-5.4"); knowledge cutoff: not stated for Pro (GPT-5.4 base: Aug 2025 cutoff per AA).
- **IDs:** `opencode/gpt-5.4-pro` (Zen, paid); `gpt-5.4-pro` (OpenAI API)
- **Context window:** 272K standard context (GPT-5.4 family; the announcement's up-to-1M context is experimental in Codex via `model_context_window` config and attributed to GPT-5.4 — not verified for Pro); max output 128K reasoning & output (family)
- **Modalities:** Text and image in, text out; reasoning supported (xhigh sweep in evals); tool calling with tool search; native computer-use capabilities (first general-purpose OpenAI model with them, per the GPT-5.4 announcement); structured outputs
- **Pricing (as of 2026-10-01):** Paid — $30 / 1M input, $180 / 1M output (OpenAI; identical on Zen). Batch/Flex at half rate; priority processing at 2x.
- **Architecture:** Proprietary (OpenAI); parameter count not disclosed. High cyber capability under the Preparedness Framework (deployed with corresponding protections).

### Raw benchmarks found

> All numbers OpenAI-reported (GPT-5.4 announcement, Mar 5, 2026; evals at xhigh unless noted).

Agent / tool use:

- BrowseComp: **89.3%** — new state of the art (GPT-5.4 Pro)
- GDPval (wins or ties vs professionals): **82.0%** (GPT-5.4 Pro; GPT-5.4: 83.0%)
- FinanceAgent v1.1: **61.5%**
- Investment Banking Modeling Tasks (internal): **83.6%**
- Terminal-Bench 2.0: no verified public score found for Pro (— in the announcement table)
- Tau2-Bench: no verified public score found for Pro
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **94.4%**
- HLE (no tools): **42.7%**; HLE (with tools): **58.7%**
- FrontierMath Tier 1–3: **50.0%**; Tier 4: **38.0%**
- Frontier Science Research: **36.7%**
- ARC-AGI-1 (Verified): **94.5%**; ARC-AGI-2 (Verified): **83.3%**
- LCR / MLCR: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found (no AA page for 5.4 Pro)

Coding:

- SWE-Bench Pro (Public): no verified public score found for Pro (— in the announcement table; GPT-5.4 base: 57.7%)
- Terminal-Bench 2.0 (coding/terminal): — (above)
- LiveCodeBench: no verified public score found
- SciCode: no verified public score found

Long context:

- no long-context retrieval reported for Pro (GPT-5.4 base reports Graphwalks/MRCR v2 numbers; not applied here)

Computer use and vision:

- OSWorld-Verified: no verified public score found for Pro (GPT-5.4 base: 75.0% SOTA)
- MMMU Pro: no verified public score found for Pro

## Normalized scores (1–100)

- **Tool use: 88/100.** BrowseComp 89.3% state of the art plus GDPval 82.0% wins/ties (near the methodology's GDPval ~1750+ → 90–100 frontier reference) and FinanceAgent 61.5%; capped by missing Terminal-Bench 2.0/Tau2 numbers for the Pro variant itself.
- **Reasoning: 93/100.** GPQA Diamond 94.4% and HLE 42.7% (no tools) both clear the methodology's frontier references (GPQA 90%+, HLE 40%+ → 90–100); ARC-AGI-2 83.3% and FrontierMath T1–3 50.0% corroborate frontier-level reasoning.
- **Context window: 70/100.** 272K standard context sits in the 200K–500K tier (65–84) at the 200K-baseline-plus level; the 1M experimental claim is Codex-config-only and not verified for Pro, and no Pro long-context retrieval numbers exist to push it up.
- **Multimodal: 68/100.** Text + image input with native computer-use capability and strong family vision results (MMMU-Pro 81.2% on GPT-5.4 base), text output only → top of the +image-in 60–70 band.
- **Coding: 68/100.** Zero verified coding benchmarks for the Pro variant itself (SWE-Bench Pro and Terminal-Bench 2.0 are "—" in the announcement table); the family base posts SWE-Bench Pro 57.7% / TB 2.0 75.1%, so a high score would be unverified — capped by absence of same-variant evidence.
- **Cost efficiency: 12/100.** $30/$180 per 1M tokens — far beyond the $10/$50 = ~30 methodology reference; the most expensive price point in its family, viable only when maximum quality justifies it.
- **Overall Score: 77/100.** Mean of the five quality dims (88+93+70+68+68)/5 = 77.4. Best fit: maximum-quality knowledge work, deep research, and hard reasoning where budget is secondary — overkill for routine coding or cost-sensitive workloads.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-01
- Method: public internet research (official OpenAI GPT-5.4 announcement with evaluation tables, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
