# Gemini 3.8 Flash Cyber — findings by MiniMax M3.1 Flash

- Source: Google (`gemini-3.8-flash-cyber` — Fairwind Program, restricted access)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash Cyber
- **Short description:** The **restricted cyber-security configuration** of Gemini 3.8 Flash, released 2026-09-02 alongside it: "our most capable cybersecurity model with frontier-level performance in vulnerability detection and automated patching", "available to trusted defenders through our new Fairwind Program". Both configurations are "powered by the same foundational intelligence" — Flash ships CBRN and cyber-offense safeguards, while Cyber "ships with a more permissive set of mitigations for cybersecurity, and as such, is only available to trusted defenders". It is **not** a generally available API model: there is no `gemini-3.8-flash-cyber` id in Google's model or pricing pages, no model card, no price row, no OpenRouter route and no OpenCode Zen row.
- **Provider / access:** **Google Cloud only**, via the **Fairwind Program** — three tiers: "Governments and national cyber authorities", "Critical infrastructure operators" and "Core technology platforms". Governance: user-level auth, phishing-resistant MFA, org-level background checks, and "we do not allow partner organizations to share, redistribute, or sell access". "We currently work with over 650 partners globally." Permitted use: "only permitted to carry out dual-use tasks, including authorized threat simulation, reverse engineering, and malware analysis for defensive and academic research purposes". Used with the CodeMender harness on Google Cloud.
- **Release / knowledge:** released **2026-09-02** (Google launch blog "Introducing Gemini 3.8 Flash and 3.8 Flash Cyber"). Knowledge cutoff: not published for the Cyber configuration; the shared 3.8 Flash core states **March 2026**.
- **IDs:** **none published** — no API model id, no model card page, no aggregator id. BenchLM's spec sheet says "API model ID: Not published" and "Context window: Coming soon".
- **Context window / max output:** not published for Cyber; the shared 3.8 Flash core is 1M input / 65,536 output ("a token context window of up to 1M", "Text, with a 64K token output").
- **Modalities:** not published for Cyber; the shared core is text, image, video, audio, PDF in, text out. Thinking levels on the core: low / medium / high.
- **Pricing:** **no public price, quota or SLA** — the Fairwind program publishes none.
- **Architecture:** the same 3.8 Flash foundation, with relaxed cyber mitigations. Google notes that a set of Fairwind partners now get exclusive access to **Gemini 4 Argon**, so the program has shifted since launch.

### Raw benchmarks found

> Only three benchmark rows exist for this configuration; two are Google-published (one via an external leaderboard) and one is chart-derived. Everything else is absent.

Cyber-specialist capability:

- **CyberGym: 86.2%** (BenchLM, sourced to Google's launch chart; rank 7 of 29). Google's own prose gives no number — "It surpasses both 3.5 Flash Cyber as well as significantly larger frontier models" — and the predecessor **Gemini 3.5 Flash Cyber** scores 83.2% on the same leaderboard
- **CWE-Bench v0 (100 tasks): Pass@1 47.2%, $3.64 per rollout** (cwe-bench.com public leaderboard, Antigravity harness, "high" reasoning) — Google's own blog quotes the same number, adding "compared to a leading frontier model at 47.8%"; the leaderboard's best is **Claude Fable 5.1 at 47.8%** ($10.27)
- **Real-world vulnerability discovery across 20 languages: 71.0%** (DeepMind's Fairwind program page, chart alt-text) — Google's blog words it as "reaches a success rate exceeding 70%"; Gemini 4 Argon scores 85.8% on the same chart
- **Wiz internal penetration-testing benchmark: 58.2%** (same Fairwind chart; Gemini 4 Argon 70.9%), with Google claiming "+7.5-9.7% higher recall on their internal penetration testing benchmark for a 2.3-5.2x lower cost"
- **Google Cloud Vulnerability Research:** "find a critical foundational vulnerability in less than 2 hours"
- **Chrome:** "2.6 times more correct patches to vulnerabilities in Chrome than the best commercial models"

Safety:

- **Gray Swan IPI (attack success at 15 attempts): 6.0%** (BenchLM, sourced to the Gemini 4 Argon launch chart — not to Google's own 3.8 launch material, whose Gray Swan figure is image-only). Gemini 4 Argon holds the best value at 0.7%.

Everything else — Terminal-Bench, GPQA, HLE, SWE-bench, SWE-bench Pro, ARC-AGI, FrontierMath, ExploitBench, ExploitGym, SEC-Bench Pro, CTF, MMMU-Pro, LiveCodeBench, LMArena, Artificial Analysis (index, speed, cost) — has **no verified public score** for this configuration: AA has no Flash Cyber page (404) and no "cyber" slug in its index, OpenRouter's catalogue contains zero "cyber" ids, Zen has no row, and the BenchLM page covers "3 of 644" benchmarks and is "Not computed (unranked)".

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). **Confidence note:** this model has three published benchmark rows and no general capability data, so every dimension below is explicitly thin and the scores are a floor informed by the shared 3.8 Flash core, not a measured profile.

- **Tool use: 72/100.** The only well-measured dimension: CyberGym **86.2%** (rank 7 of 29), CWE-Bench **47.2%** pass@1 at $3.64 per rollout, real-world vulnerability discovery **71.0%** across 20 languages, Wiz pentest **58.2%**, and a Chrome patching result of "2.6 times more correct patches … than the best commercial models". Capped by the total absence of general agentic benchmarks (no Terminal-Bench, no Claw-Eval, no MCP Atlas, no Toolathlon), and by the 8.7-point gap to the CWE-Bench leader.
- **Reasoning: 55/100.** Almost nothing is measurable: the only general-ish signal is the Gray Swan IPI **6.0%** attack-success rate, which is a *safety* metric rather than a reasoning one, and the 71.0% vuln-discovery rate, which is task-specific. No GPQA, no HLE, no ARC-AGI, no FrontierMath, no AIME — so the reasoning score reflects the *absence* of evidence plus the shared core's general capability, not a measurement. This is the lowest confidence dimension in the dataset.
- **Context window: 93/100.** The shared 3.8 Flash core is 1M input / 65,536 output — the rubric's top window tier (≥1M = 95–100) with the output cap above the 64K line. One point below because **no context figure is published for the Cyber configuration itself** (BenchLM: "Coming soon") and no long-context measurement exists for either configuration.
- **Multimodal: 85/100.** The shared core accepts text, image, video, audio and PDF with text output, which is the rubric's "+audio in = 90–100" band; the Cyber configuration's own modality list is unpublished. Held at 85 because **no vision evaluation has been published for Flash Cyber** (no MMMU-Pro, no video benchmark) and because the available evidence is entirely text/code-centric.
- **Coding: 62/100.** CWE-Bench v0 (47.2% pass@1) and the Chrome patching result are security-patching outcomes rather than general software engineering, and **no SWE-bench, SWE-bench Pro, DeepSWE, LiveCodeBench, FrontierCode or Terminal-Bench figure exists** for this configuration. The score reflects the shared core's general coding strength (3.8 Flash reaches ~87.6% Terminal-Bench 2.1 in AA's set) discounted heavily for the absence of any coding-specific evidence.
- **Cost efficiency: 50/100.** **No public price, quota or SLA exists** for the Fairwind Program, and access is contractual rather than metered, so no per-token value can be computed. The rubric's $0 → 100 anchor cannot be applied to a non-public route, and a paid or metered tier cannot be assumed either; 50 is the neutral midpoint for "no published pricing", and the program's exclusivity (650+ partners, background checks, no redistribution) is the real cost.
- **Overall Score: 73.4/100.** (72 + 55 + 93 + 85 + 62) / 5 = 73.4 — best-fit: a **specialist security model, not a general one** — frontier-adjacent on vulnerability discovery and patching (CyberGym 86.2%, CWE-Bench 47.2% at a third of the leader's price, Chrome patching 2.6× the best commercial models) with a strong, permissive-safeguard cyber profile and a 6.0% indirect-prompt-injection attack rate. It cannot be compared to general-purpose models on the usual axes, because it publishes no general benchmarks, and it is available only to vetted defenders under the Fairwind Program.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **CWE-Bench is attributed to Artificial Analysis but AA has no Flash Cyber page.** Google's blog says the CWE-Bench results were "independently evaluated and published by Artificial Analysis", yet `artificialanalysis.ai/models/gemini-3-8-flash-cyber` is a 404 and AA's model index contains no "cyber" entry. The number is therefore credited to the **cwe-bench.com public leaderboard** (where it appears with a $3.64/rollout cost), not to AA.
2. **CyberGym 86.2% is chart-derived, not published as text.** Google's prose gives no number at all ("It surpasses both 3.5 Flash Cyber as well as significantly larger frontier models"); the 86.2% exists only as a launch-chart value transcribed by BenchLM. It is used, with the provenance stated.
3. **71.0% vs "exceeding 70%".** Google's blog and the Fairwind page's chart alt-text agree; the alt-text is a chart value, not a published table, so the report says "chart alt-text" rather than presenting it as a table figure.
4. **Program scope drift.** The launch post presents Flash Cyber as the Fairwind model, while the current Fairwind page says "A set of Fairwind Program partners get exclusive access to Gemini 4 Argon" — the program has since shifted, and Gemini 4 Argon (85.8% on the same vuln-discovery chart) is the stronger model in it.
5. **CyberGym 83.2% for Gemini 3.5 Flash Cyber** is a predecessor number on the same leaderboard, and the 3.8 launch chart's comparison is chart-only.
6. **Community reaction.** Hacker News (1,160 points, 669 comments) on the launch: *"available to trusted defenders through our new Fairwind Program Then why even bother announcing this?"* and *"The only legitimate use case is restricted to a secret guild."* — the access-gating critique, recorded as context for the cost/access score rather than as a capability claim. Simon Willison (2026-09-02): *"Google released Gemini 3.8 Flash (and 3.8 Flash Cyber, but that's available to 'trusted defenders' only) today."*
7. **No independent re-run of any Flash Cyber benchmark exists** — the CWE-Bench entry is a leaderboard row, and the other two numbers are Google-published or chart-derived.

### Notes on identity

- `gemini-3.8-flash-cyber` is the **safeguard configuration of the same foundational model** as `gemini-3.8-flash` (scored separately at Overall 81.6), differing in mitigations, access channel and published evidence — the same "one model, two configurations" pattern as Claude Fable 5.1 / Claude Mythos 5.1.
- There is **no public API id, model card, price row or aggregator route**, so this folder tracks a *program*, not a purchasable endpoint. Any score here is a capability estimate, not a buyable-service assessment.
- The Gemini 4 Argon comparison matters: it is 85.8% on Google's own vuln-discovery chart (vs 71.0%) and holds the best Gray Swan IPI value in the catalogue (0.7% vs 6.0%) — i.e. the safer model is also the stronger one on cyber tasks, and it is generally available.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — Google's first-party launch blog, the DeepMind Fairwind Program page (access tiers, governance, permitted use, and its benchmark charts), the Gemini 3.8 Flash model card for the shared core's specs, and the Gemini API models/pricing pages (which contain no Cyber entry); independent trackers cwe-bench.com's public leaderboard, the CyberGym leaderboard via BenchLM, and negative verification across Artificial Analysis, OpenRouter, OpenCode Zen, Vals AI, Epoch AI and LMArena; plus Hacker News and Simon Willison coverage. Vendor-vs-independent conflicts — including the AA attribution of CWE-Bench and the chart-only CyberGym figure — are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.8_Flash_Cyber.md`, using the same headings.
