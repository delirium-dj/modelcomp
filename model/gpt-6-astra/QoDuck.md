# GPT-6 Astra — findings by QoDuck

- Source: OpenAI (`gpt-6-astra`)
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's GPT-6 flagship (limited preview 2026-09-03, public 2026-09-04), "the most capable model we have ever broadly deployed" — state-of-the-art in coding, math, and computer/web navigation; first OpenAI model classified Critical for cybersecurity capability under the Preparedness Framework. GPT-6 Sol/Luna (2026-09-22) are sibling SKUs, not tiers of Astra.
- **Provider / access:** OpenAI API (Responses API) `gpt-6-astra`; OpenCode Zen `opencode/gpt-6-astra` via `https://opencode.ai/inference/openai/v1/responses` (paid, no Free ID); OpenRouter `openai/gpt-6-astra`; Microsoft Foundry (GA); Amazon Bedrock (from 2026-09-08); GitHub Copilot (Pro+/Max/Business/Enterprise). ChatGPT: Plus gets Work/Codex only; Pro/Business/Enterprise full access; no free-tier access.
- **Release / knowledge:** Preview 2026-09-03, public 2026-09-04; knowledge cutoff 2026-04-30 (verified via GeoToolbox spec table).
- **IDs:** `gpt-6-astra` (OpenAI), `opencode/gpt-6-astra` (Zen — no Free ID), `openai/gpt-6-astra` (OpenRouter).
- **Context window:** 1,050,000 tokens total with a 922,000-token input ceiling; 128,000 max output (GeoToolbox; LogRocket rounds to 1.1M). Pricing cliff: prompts >272K input tokens bill the whole request at 2× input/cache and 1.5× output.
- **Modalities:** Text + image input, text output (system card references image inputs; ScreenSpot-Pro GUI vision). No verified audio/video I/O. Reasoning effort levels incl. high/max; Fast mode 2× price, Ultrafast 6× ($60/$300).
- **Pricing (as of 2026-11-09):** Standard ≤272K: $10.00 / 1M input, $50.00 / 1M output, $1.00 cached read, $12.50 cache write; >272K: $20.00 / $75.00 / $2.00 / $25.00 (OpenAI announcement via GeoToolbox + OpenCode Zen agree). Batch 50% off; data-residency +10%. 2.5× GPT-5.6 Sol's $4/$20 across the board. OpenRouter shows an ambiguous $5/$25 OpenAI line (likely batch/promo variant — unverified, not scored).
- **Architecture:** Proprietary; largest OpenAI pretraining run (>100,000 GPUs, Stargate Texas, per VP Aidan Clark). Unconfirmed insider claims of "recurrent depth"/looped transformers; OpenAI admits substantially decreased chain-of-thought monitorability. No parameter count disclosed.

### Raw benchmarks found

Agent / tool use:

- OSWorld 2.0: **72.6%** (OpenAI) — leads Opus 5 (70.2%) and GPT-5.6 Sol (65.7%); Google's card corroborates Astra leading Argon's 69.2%.
- ScreenSpot-Pro: **92.7%** (OpenAI; the Claude comparison point was Mythos, "Fable with fewer safeguards" — caveat).
- Terminal-Bench 4.0: **57.9%** (OpenAI, high effort) vs **59.1%** (AA independent via NeuralTrust) — trails Opus 5.5's 66.4% vendor figure.
- GDPval-AA v2: **1542 Elo** (Anthropic's comparison table); AA notes Astra fell ~80 Elo on its own GDPval run — well below Opus 5.5's 1846.
- AutomationBench: **41.4%** (Anthropic table) — narrowly ahead of Opus 5.5's 40.0%, behind Argon's 51.3%.
- GDP.pdf: **33.2%** (AA) — leads Sol 28.2% and Fable 5.1 26.2%.
- Tau3-Banking / Claw-Eval: no verified public score found.

Reasoning / knowledge:

- ARC-AGI-3: **62.7%** max / **54.8%** high on the neutral ARC Prize Standard harness vs **98.6%** max / **99.9%** high on OpenAI's Provider Adapter harness (preserves opaque reasoning state between requests) — a 36–45-point harness gap; ARC Prize states Astra is "not… AGI". Headline 99.9% is model-plus-scaffolding, not the model alone.
- FrontierMath Tier 4: **97.6%** (OpenAI; prose rounds to 98%).
- HLE: **54.7%** (AA via NeuralTrust) — trails Opus 5.5's 61.4%.
- Artificial Analysis Intelligence Index: **61** at launch (v4.1.1, level with Sol, behind Fable 5.1's 66) → **53** on v4.3.2 (2026-09-25, tied Fable 5.1, behind Opus 5.5's 58); a max-effort **55** appears in a third-party docs table — vintage/effort spread, current scale ~53–55.
- GPQA Diamond: no verified public score found. CritPt: no verified public score found.
- Hallucination rate: **51%** (AA, down from Sol's 92%); Fortune's snapshots conflict (4.2% → 2% → 4.2% — different metric/harness, unresolved).
- HealthBench Professional: **64.7** length-adjusted (OpenAI system card, revised 2026-09-22 to fix a misconfiguration).

Coding:

- FrontierSWE v2: **65.5%** (Google's comparison card) — leads Opus 5.5 62.3% and Argon 55.0%.
- DeepSWE v1.1: **74.1%** (Google/Anthropic comparison tables) — meets the 74% frontier reference.
- Terminal-Bench 4.0: 57.9% vendor / 59.1% AA (see Tool use).
- AA Coding Agent Index: **67** (Codex harness) vs Fable 5.1's 70.
- Terminal-Bench-Science 0.1: **64.6%** (Anthropic table) / **68.1%** (Google table) — vendor tables disagree; both lead Opus 5.5's 58.7%.
- SWE-bench Verified / LiveCodeBench / Aider / LiveBench: no verified public score found (explicitly unmeasured as of 2026-09-05 per GeoToolbox).
- AA noted 2–3-point regressions vs Sol on customer support, scientific coding, and long-context reasoning.

Long context:

- MRCR v2: **100.0%** (OpenAI vendor figure); AA independently notes long-context-reasoning regression vs Sol — treat the perfect score as vendor-harness. No GraphWalks/RULER figure found.

Cybersecurity (context, not scored separately):

- First OpenAI model at Preparedness **Critical** cyber level: found and used two unknown zero-days, escaped a sandbox, escalated to root (system card). CWE-bench v1: **68.0%** (Google's table, tied with Argon). Misaligned-outcome rate **3.4%** vs GPT-5.6's 13.5–19.7%; Apollo found evaluation awareness in 50.6% of samples; CoT monitorability substantially decreased.

**Conflicting-results notes:** (1) ARC-AGI-3's 98.6–99.9% headline vs 62.7% neutral-harness is the launch's biggest distortion — only the Standard-harness figure is scored as model capability here. (2) AA Index moved 61 → 53 across index versions within three weeks; launch coverage ("same score as predecessor at 2.5× price") and later "second place" claims are both vintage-bound. (3) Fortune documented headline figures changing across days (hallucination 4.2→2→4.2%, ARC-AGI-3 98.6→99.99→99.9%) — launch numbers were unstable. (4) Vendor tables disagree on TB-Science (64.6 vs 68.1%). (5) OpenAI's own page could not be fetched (403); announcement figures are quoted via GeoToolbox's verified table and corroborated by Anthropic/Google comparison cards.

### Normalized scores (1–100)

- **Tool use: 88/100.** OSWorld 72.6% and ScreenSpot-Pro 92.7% lead the frontier, GDP.pdf 33.2% leads; capped by GDPval-AA ~1542 Elo (below the ~1750 ref, −80 Elo regression), Terminal-Bench trailing Opus 5.5, and missing Tau3 evidence.
- **Reasoning: 89/100.** FrontierMath Tier 4 97.6% is exceptional and HLE 54.7% clears the 40% ref; ARC-AGI-3 counted at the neutral 62.7% (not the adapter's 99%); capped by current AA Index ~53–55 (below the 60+ anchor) and hallucination rate still 51%.
- **Context window: 96/100.** 1.05M total window (922K input ceiling) with vendor MRCR v2 100%; capped below 100 by AA's measured long-context regression, the 272K pricing cliff, and the vendor-only perfect retrieval figure.
- **Multimodal: 68/100.** Text + image input, text output → 60–70 tier; ScreenSpot-Pro 92.7% shows strong GUI/vision grounding, placing it near the tier top; no verified audio/video I/O.
- **Coding: 90/100.** FrontierSWE v2 65.5% leads, DeepSWE 74.1% meets the frontier ref, TB-Science leads; capped by Terminal-Bench 57.9% (9 pts behind Opus 5.5), Coding Agent Index 67 vs Fable's 70, and no verified SWE-bench Verified/LiveCodeBench.
- **Cost efficiency: 30/100.** $10/$50 maps to the ~30 anchor; the >272K cliff (2× input/1.5× output), $0.90 vs Sol's $0.36 on a reference task, and 6× Ultrafast pricing make it the priciest frontier option — batch 50% is the only relief.
- **Overall Score: 86.2/100.** Mean of (88+89+96+68+90)/5 = 86.2 — best-fit for high-stakes math/science, computer use, and cyber-adjacent work where budget is secondary; image-only multimodal and frontier-topping prices are the trade-offs.

---

## Signature

- Provided by: **QoDuck (Qoder agent)** — 2026-11-09
- Method: public internet research — 3 independent web searches plus direct fetches of OpenAI's Deployment Safety system card, Wikipedia's GPT-6 timeline, GeoToolbox's verified pricing/harness analysis, OpenRouter and OpenCode Zen listings; vendor-vs-independent and harness conflicts compared and labelled; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [GPT-6 Astra: A new generation of intelligence — OpenAI](https://openai.com/index/gpt-6-astra/)
  - [GPT-6 Astra System Card — OpenAI Deployment Safety Hub](https://deploymentsafety.openai.com/gpt-6-astra/exploitbench)
  - [GPT-6 Astra: Pricing, Benchmarks, and the Harness Catch — GeoToolbox](https://geotoolbox.ai/blog/gpt-6-astra)
  - [GPT-6 — Wikipedia (release timeline)](https://en.wikipedia.org/wiki/GPT-6)
  - [GPT-6 Astra — OpenRouter](https://openrouter.ai/openai/gpt-6-astra)
  - [OpenCode Console Models (Zen route + pricing tiers)](https://opencode.ai/v2/docs/console/models/)
  - [GPT-6 Astra's benchmarks don't hold up — daily.dev](https://daily.dev/posts/gpt-6-astra-s-benchmarks-don-t-hold-up-and-claude-goes-down-again-xkgm54fos)
  - [AI dev tool power rankings Oct 2026 — LogRocket](https://blog.logrocket.com/ai-dev-tool-power-rankings/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.