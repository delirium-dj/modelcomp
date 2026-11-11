# Claude Mythos 5 — findings by Qwen 4 Max

- Source: Anthropic/claude-mythos-5
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5
- **Short description:** The safeguards-lifted twin of Claude Fable 5 (same underlying weights, Jun 9, 2026), offered only to verified cyberdefenders and biology researchers. Anthropic's "most capable model for cybersecurity and biology research" — the strongest cyber model it has evaluated, far ahead of Opus 4.8 on exploit development and modestly above Mythos Preview. General capability equals Fable 5; the product boundary is the safety posture and access model, not raw power. Now legacy: Mythos 5.2 is current.
- **Provider / access:** **Verification required** — Cyber Verification Program / Project Glasswing partners (cyber safeguards lifted) and a biology trusted-access program (bio/chem safeguards lifted, cyber kept). Claude API (`claude-mythos-5`), Bedrock, Google Cloud, Microsoft Foundry. Not generally available; no GitHub Copilot/Databricks listing. Glasswing: 12 founding partners (AWS, Apple, Broadcom, Cisco, CrowdStrike, Google, JPMorganChase, Linux Foundation, Microsoft, NVIDIA, Palo Alto, Anthropic) + 40+ infrastructure orgs, $100M usage credits + $4M open-source donations.
- **Release / knowledge:** Released 2026-06-09; suspended Jun 12 under a US Commerce export-control order (first such action against a commercial AI model over an alleged jailbreak); Fable 5 redeployed Jul 1, Mythos 5 stayed partner-limited. Reliable knowledge cutoff **Jan 2026**. Retirement not sooner than 2027-06-09.
- **IDs:** `claude-mythos-5` (Bedrock `anthropic.claude-mythos-5`).
- **Context window:** 1M tokens; 128K max output; no long-context surcharge. Not on the 300K-output batch beta list. Adaptive thinking always on, effort low→max (default high).
- **Modalities:** Text and images in; text out (same as Fable 5; launch-SOTA vision). No native audio/video input or media generation.
- **Pricing (as of 2026-11-11):** $10 in / $50 out per 1M — identical to Fable 5, less than half the Mythos Preview rate. Cache read $1 (10%); 5m write $12.50, 1h $20; batch 50% off. 30-day data retention required for all Mythos-class traffic (safety-only, not training).
- **Architecture:** Proprietary Mythos-class; parameters undisclosed. Same weights as Fable 5 with cyber (and, for biology partners, bio/chem) classifiers relaxed. Alignment: low misaligned behavior, similar to Opus 4.8. Epoch AI's independent read: a large, real jump in **exploit development** (~7 months ahead of trend for Preview, modestly more for Mythos 5), but the **vulnerability-discovery** advance is confounded by Glasswing's $100M spending surge — the durable edge is lower false-positive rates and better severity prioritization, not necessarily finding more bugs on a fixed budget.

### Raw benchmarks found

Cyber / tool use (Mythos-5-specific, from Anthropic's launch post / system card via Epoch AI):

- CyScenarioBench (end-to-end cyber operations, Irregular): **36.7%** — leads all (Mythos Preview 29.2%, GPT-5.5 26%, Opus 4.8 16.6%, GPT-5.4 9%, Muse Spark 0%, Gemini 3 Pro 0%)
- OSS-Fuzz (Anthropic closed-source, crash base case): **80%** crash rate (Mythos Preview 76.7%, Opus 4.8 61.5%); severity-weighted exploitation far ahead of Opus 4.8
- System card: "the most capable model we have evaluated on cyber tasks… far ahead of Claude Opus 4.8, though only modestly above Claude Mythos Preview" on exploit development
- CyberGym / Cybench: Mythos Preview essentially saturates (95%+ crash reproduction); Mythos 5 modestly above. ExploitGym / ExploitBench / AISI Cyber Ranges / SCONE-Bench: large Preview jumps, Mythos 5 modestly better (no separate Mythos 5 numeric published for these)
- Predecessor context (Mythos Preview, **not** Mythos 5): CyberGym 83.1% vs Opus 4.6 66.6% (Epoch notes Opus 4.6's system-card figure is 74% — conflicting, labelled); Firefox JS-engine working exploits 181 vs Opus 4.6's 2; SCONE-Bench 100% of smart contracts exploited; AISI "Cooling Tower" fully completed 3/10 attempts (all other models 0/10); found a 27-year OpenBSD bug, a 16-year FFmpeg bug (5M automated test hits missed it), and an autonomous Linux kernel privilege-escalation chain
- Real-world discovery (Glasswing, Preview-era): high/critical CVEs from 21 orgs +142% (Apr) / +262% (May) vs 2025 baseline; Mozilla "elite security researcher" level; Palo Alto "a year of pentesting in under three weeks"; curl (heavily audited) only 1 low-severity find + 4 false positives — the confound Epoch flags

General capability (same weights as Fable 5; the restricted Mythos 5 is not separately listed on public leaderboards — MorphLLM's 93.9%/77.8% entries are Mythos Preview):

- SWE-bench Verified **95.0%** / SWE-bench Pro **80.3%** class (Fable 5 public figures); Terminal-Bench 2.1 88.0%; FrontierCode Diamond 29.3% (>2x field); HLE 59.0%; GDPval-AA 1,932 Elo; OSWorld-Verified 85.0%
- Reasoning/science (Mythos 5): protein design ~10x acceleration, 9/14 targets yielded strong candidates (Dyno Therapeutics AAV); novel molecular-biology hypotheses preferred ~80% vs Opus-class in blind review, one E. coli mechanism independently corroborated; autonomous genomics across 138 species trained a model 100x smaller that beat a Science-published baseline
- Vision: Pokémon FireRed with a vision-only minimal harness; screenshot-to-source; scientific-figure extraction
- Long context: coherent across millions of tokens; file-based memory tripled Slay the Spire performance vs Opus 4.8

### Normalized scores (1–100)

- **Tool use: 94/100.** Strongest cyber model evaluated — CyScenarioBench 36.7% (#1, >1.4x GPT-5.5), OSS-Fuzz 80%, elite exploit development — plus Fable-5-class general agency (GDPval 1,932, OSWorld-V 85.0); capped by verification-only access (no general deployment) and Epoch's discovery-vs-exploitation nuance.
- **Reasoning: 94/100.** Same weights as Fable 5: HLE 59.0, FrontierCode Diamond 29.3, novel-hypothesis science preferred ~80% in blind review; capped by Jan 2026 cutoff and no separate GPQA/AA-index figure for the restricted model.
- **Context window: 95/100.** 1M/128K, no surcharge, million-token coherence + file-memory gains; capped by 10% cache reads, no 300K batch eligibility, always-on thinking.
- **Multimodal: 72/100.** Text+image in, text out, launch-SOTA vision; no native audio/video input or media generation.
- **Coding: 92/100.** Fable-5-class SWE-bench Verified 95.0 / Pro 80.3 plus elite exploit development (Firefox/SCONE predecessor records); capped by the restricted model not being separately leaderboarded and the 5.5 generation now leading general agentic coding.
- **Cost efficiency: 40/100.** $10/$50 premium with 10% cache reads and always-on thinking; half the Mythos Preview rate, but verification-gated and $100M-credit-subsidized in Glasswing, so real-world cost evidence is confounded.
- **Overall Score: 89.4/100.** Mean of the five quality dims (94+94+95+72+92)/5 = 89.4. Best-fit: verified defensive-cyber and biomedical research workflows needing the strongest exploit-development / scientific-reasoning capability — not a general-purpose API model; for everyday agentic work its Fable 5 twin (and the 5.5 generation) is the accessible choice.

---

## Signature

- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-11
- Method: public internet research (Anthropic's official announcement + Mythos 5 platform docs, corroborated by Epoch AI's independent cyber-evidence compilation and two Till Freitag analyses); scores are normalized 1–100 interpretations, not official vendor scores. Mythos 5 kept strictly separate from Mythos Preview (CyberGym 83.1, Firefox 181, SCONE 100%, SWE-V 93.9 are Preview records, labelled as predecessor) and from Fable 5 (same weights; general benchmarks cited as Fable-5-class, not separately leaderboarded for the restricted model). Conflicts labelled, not averaged: Opus 4.6 CyberGym 66.6 vs 74 system-card; CyScenarioBench 36.7 (Mythos 5) vs 29.2 (Preview). Epoch's exploit-development-vs-vulnerability-discovery distinction and the Glasswing spending confound explicitly incorporated; Glasswing/credit-subsidized real-world claims treated as non-neutral.
- Reference URLs:
  - [Claude Fable 5 and Claude Mythos 5 — Anthropic](https://www.anthropic.com/news/claude-fable-5-mythos-5)
  - [Claude Mythos 5 — Claude Platform Docs](https://platform.claude.com/docs/en/models/mythos-5/overview)
  - [Are Mythos' cyber capabilities overhyped? — Epoch AI](https://epochai.substack.com/p/are-mythos-cyber-capabilities-overhyped)
  - [Claude Fable 5 & Mythos 5: From Tasks to Responsibilities — Till Freitag](https://till-freitag.com/en/blog/claude-fable-5-mythos-5-en)
  - [Claude Mythos & Project Glasswing — Till Freitag](https://till-freitag.com/en/blog/anthropic-mythos-glasswing-analysis)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.