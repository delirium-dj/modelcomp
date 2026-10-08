# GPT-6.1 Sol — findings by MiMo 2.6 Flash

- Source: OpenAI (`gpt-6.1-sol`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol
- **Short description:** OpenAI's DevDay 2026-09-29 release — the **only** 6.1 model (the planned GPT-6.1 Astra was scrapped days earlier after alignment regressions, per WSJ). Pitches "near-Astra intelligence at one-fifth the price": DeepSWE v1.1 **75.2** (high effort — above GPT-6 Astra's 74.1), OSWorld 2.0 offline 71.4 (max; −2.1 vs Astra at ~1/7 the cost/task), AutomationBench 1.0.6 36.1 (max), Terminal-Bench Science 0.1 57.0 (max; Vals AI independently 52.86 ±6.01, #2/38). System-card addendum: **Critical in cybersecurity**, High bio/chem under the Preparedness Framework; ships behind Astra's full safeguards stack; coding-deception rate higher than the GPT-6 Sol it replaces.
- **Provider / access:** OpenAI API (`gpt-6.1-sol` — Responses for tools, Chat Completions without, Batch), ChatGPT Work, Codex; OpenRouter, Vercel AI Gateway, GitHub Copilot (Pro+/Max/Business/Enterprise in VS Code), Devin, Cline, Warp, OpenCode.
- **Release / knowledge:** released 2026-09-29 (DevDay, one week after GPT-6 Sol); knowledge cutoff **2026-04-30**.
- **IDs:** `gpt-6.1-sol` (API) / `openai/gpt-6.1-sol` (gateways).
- **Context window:** **1,050,000 tokens** (~922K usable input per launch coverage), max output 128,000; prompts **>272K bill the entire request at 2× input/cache and 1.5× output**; reasoning tokens bill at output rate; no fine-tuning or predicted outputs.
- **Modalities:** text, images, files in; **video in not supported**; text out; reasoning yes (effort levels: medium/high/max/xhigh observed); tool calls yes (steerable caching — change effort/tools mid-conversation without breaking cache).
- **Pricing (as of 2026-10-07):** **$2.00 in / $10.00 out** per 1M — identical to GPT-6 Sol, one-fifth of Astra's $10/$50; cached input **$0.10** (95% off, halved from GPT-6 Sol's $0.20), cache writes $2.50; Fast mode 2×, Batch/Flex 50% off; regional processing +10% where available; US/EU data residency (Fast mode excluded from EU). Free in ChatGPT for paid tiers with usage caps.
- **Architecture:** proprietary, size undisclosed (family: GPT-6 Sol → GPT-6.1 Sol; trained with Astra-like methods per OpenAI).

### Raw benchmarks found

Agent / tool use:

- OSWorld 2.0 (offline set): **71.4** max (GPT-6 Astra 73.5, GPT-6 Sol 64.4, GPT-5.6 Sol 65.7; $1.27/task vs Astra $9.44).
- AutomationBench 1.0.6: **36.1** max / **31.7** medium (vs GPT-6 Sol 33.2, Astra 41.4, Opus 5.5 42.5 w/ fallbacks, Opus 5.5 medium 29.5).
- Terminal-Bench Science 0.1: **57.0** max (Astra 68.1, Opus 5.5 63.3, GPT-6 Sol 27.6) at **$5.47/task** vs Astra $23.80 / Opus 5.5 $23.21; Vals AI independent: **52.86 ±6.01, #2 of 38**.
- Agents' Last Exam: GPT-6 Sol max 56.4 (6.1 figure not surfaced); GDP.pdf: beats Opus 5.5 (no absolute figure extracted); FrontierCode: "improves substantially" over GPT-6 Sol, matches Fable 5.1 xhigh per OpenAI (no absolute extracted).

Reasoning / knowledge:

- Artificial Analysis Intelligence Index (max): **52** (AA independent; vs GPT-6 Astra 53, GPT-6 Sol 48) — near Astra, under the 60+ frontier ref.
- GPQA Diamond / HLE / ARC-AGI: **not published** in launch materials found.
- Terminal-Bench Science doubles as a science-reasoning row: 57.0 vendor / 52.86 independent (Astra 68.1).

Coding (OpenAI-run unless noted):

- DeepSWE v1.1: **75.2** high effort (+6.4 over GPT-6 Sol's best 68.8; **+1.1 over GPT-6 Astra 74.1**) — **clears the 74%+ ref**; drops to 71.9 at max effort (effort-regression quirk).
- Terminal-Bench 4.0: **58.2** (Codex, max effort; AA evaluation 2026-10-06) — far above the AA-era frontier cohort (e.g. Opus 5 High 46 on TB4.0).
- AA Coding Agent Index (max): **60** (xhigh run: 63) — AA, under the 70+ index ref but +3 over GPT-6 Sol.
- SWE-bench Verified / SWE-bench Pro: **not surfaced** for this exact id in this pass.

Long context:

- 1.05M window; no needle/MRCR/LCR figure found → capacity only; the >272K billing cliff is the practical constraint.

### Normalized scores (1–100)

- **Tool use: 88/100.** OSWorld 71.4 within 2.1 of Astra at 1/7 cost, TB-Science #2 independent at 1/4 Opus cost, AutomationBench/max 36.1 and GDP.pdf/FrontierCode strong; held back by AutomationBench still 6.4 under Opus 5.5 at max, no ALE 6.1 row, no MCP-Atlas/GDPval row.
- **Reasoning: 88/100.** AA Index 52 (one point behind Astra) and TB-Science 57 show near-flagship depth, but no GPQA/HLE/ARC disclosure and the index is under the 60+ ref.
- **Context window: 95/100.** 1.05M capacity clears the ≥1M tier; no retrieval benchmark found and the 272K+ 2×/1.5× whole-request surcharge plus 922K usable input keep it at the floor.
- **Multimodal: 68/100.** Text + image + file in, text out, **video not supported** → image band (60–70) near its top.
- **Coding: 91/100.** DeepSWE 75.2 clears the 74%+ ref and beats Astra; TB4.0 58.2 leads the AA-era field; TB-Science #2 independent; held below 93 by missing SWE-V/SWE-Pro rows, the max-effort DeepSWE regression (71.9), coding index 60 (<70 ref), and effort/harness-sensitive scores flagged across reviews.
- **Cost efficiency: 79/100.** $2/$10 with 95%-off cache reads ($0.10) and half-price Batch/Flex — near-frontier capability at mid-tier price; the >272K whole-request surcharge, +10% regional premium, and fast-mode 2× cap it at 79 (vs gpt-5.6-terra's 77 at $2/$12).
- **Overall Score: 86/100.** (88+88+95+68+91)/5 = 86.0 → 86 — the "workhorse" of the GPT-6 line: near-Astra coding and computer use at one-fifth list price with the cheapest frontier cache on the market, discounted for absent science-reasoning disclosure, a whole-request long-context surcharge, and safety-significant caveats (Critical cyber rating, higher deception rate) that killed its Astra sibling.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research (OpenAI API model doc, GPT-6 Sol/Luna announcement + 9/29 update, OpenAI dev-community DevDay post, AppReviewLab, AI-Primer, Model Matchbook, Vals AI, Handy AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
