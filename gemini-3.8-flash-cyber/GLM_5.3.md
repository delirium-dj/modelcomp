# Gemini 3.8 Flash Cyber — findings by GLM 5.3

- Source: Google DeepMind (`gemini-3-8-flash-cyber`)
- Date: 2026-10-12 (UTC) — second-pass re-research of the 2026-09-24 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash Cyber
- **Short description:** Google DeepMind's cybersecurity fine-tune of Gemini 3.8 Flash — "our most capable cybersecurity model with frontier-level performance in vulnerability detection and automated patching" (official launch, 2026-09-02), built for finding, validating and patching vulnerabilities with patching explicitly prioritized over offensive exploitation. Access is restricted via the **Fairwind Program** (trusted government authorities, critical-infrastructure operators, software maintainers; identity/MFA/access-control/use restrictions), and pairs the model with Google's **CodeMender harness** for find-verify-fix at agentic scale. Top use case: defensive security work for vetted organizations. Second-pass succession note: **Gemini 4 Argon (2026-09-30) now leads vulnerability discovery over 3.8 Flash Cyber** and ships through the same Fairwind Program without cyber guardrails for defenders — the Cyber model remains the patching-cost frontier on CWE-bench v0 while Argon takes the discovery crown on v1.
- **Provider / access:** Google (Fairwind Program — restricted access); **no OpenCode Zen ID**, no public endpoint. Fairwind partners at launch: Wiz (Scan for Good), Palo Alto Networks, Snowflake, Armadin; Google internally (Chrome Security, Cloud Vulnerability Research).
- **Release / knowledge:** 2026-09-02 (with Gemini 3.8 Flash); knowledge cutoff not publicly disclosed.
- **IDs:** `google/gemini-3-8-flash-cyber` (Fairwind Program only; no Zen ID, no Free ID)
- **Context window:** 1M tokens total / 65K max output (curated platform metadata; unchanged).
- **Modalities:** curated platform metadata lists **text/code in; text/code out** for the Cyber SKU — but note the launch post describes both variants as "powered by the same foundational intelligence" without confirming modality removal; the modality-drop claim is platform-metadata-sourced and flagged unverified either way. Reasoning yes; tool calls; the CodeMender harness adds agentic find/verify/fix tooling.
- **Pricing (as of 2026-10-12):** still no public per-token list for the Cyber SKU itself — but second-pass evidence pins it to the **Flash cost tier**: the launch pitch is "the Flash speed and cost that enables quick iteration", CWE-bench placement is on the Pareto frontier "at a significantly lower cost" than frontier models, and Wiz measured **2.3-5.2x lower cost** than leading frontier models on their pentest benchmark. Base 3.8 Flash intro pricing: $0.75/$3.75 (expires 2026-12-31, then $1.50/$7.50).
- **Architecture:** proprietary fine-tune of Gemini 3.8 Flash (shared foundational core, long-running agentic loops recursively evaluating and refining the model); parameter count not disclosed; ships with more permissive cyber mitigations than the base (defender-gated), full CBRN/cyber-offense safeguards retained per the Frontier Safety Framework.

### Raw benchmarks found

Direct rows for this exact ID:

- CyberGym: **86.2%** pass@1 (BenchLM + official — "surpasses both 3.5 Flash Cyber as well as significantly larger frontier models"; the prior Cyber frontier was 3.5 Flash Cyber)
- CWE-Bench v0 (Collinear): **47.2%** pass@1 — on the Pareto frontier vs a leading frontier model's 47.8% "at a significantly lower cost"; results computed by the benchmark owners using the Antigravity agent harness with high thinking (official eval-methodology PDF)
- **Internal 20-language vulnerability-discovery benchmark: >70% success** (official — "an impressive leap over our previous models" across complex codebases beyond CyberGym's C/C++ scope)
- **Real-world deployment measurements (official launch):** Chrome Security team: **2.6x more correct patches** than the best much-larger commercial models; Wiz internal pentest benchmark: **+7.5-9.7% higher recall at 2.3-5.2x lower cost** vs leading frontier models; Google Cloud Vulnerability Research: **a critical foundational vulnerability found in under 2 hours** (vs a typical months of research)
- Gray Swan IPI: strong prompt-injection robustness (launch chart; the 3.8 generation's "significant leap in prompt injection robustness")

General-capability rows remain base Gemini 3.8 Flash proxies (closest verified proxy — provisional):

- Terminal-Bench 2.1: **89.4%** (base; Vals 81.3%); Tau3-Banking **44.9%**; GDPval-AA **1545** (BenchLM)
- GPQA Diamond: **95.3%** (base); HLE **47.8%** / **54.9%** HLE-Verified (official); AA-LCR **81.3%**; AA Index **41**
- SWE-bench Verified (Vals): **80.0%** (base); DeepSWE **73.8%**; LiveCodeBench **89.5%**; SciCode **56.6%**; AA Coding Index **76.3%**

Not found for this exact ID (unchanged): Terminal-Bench 4.0, Claw-Eval, Toolathlon, MCP-Atlas, MRCR/RULER beyond base, Omniscience, and any general-purpose score distinct from the base (hokai confirms none published).

### Normalized scores (1–100)

- **Tool use: 85/100.** Held: the second pass strengthened the in-domain case — CyberGym 86.2% over larger frontier models, >70% on the 20-language internal discovery benchmark, Wiz +7.5-9.7% recall, and the CodeMender harness pairing — while general tool use still rides the base proxy (TB2.1 89.4%, GDPval 1545, Tau3 44.9%) unproven for this exact SKU.
- **Reasoning: 88/100.** Held: base-proxy GPQA 95.3% and HLE-Verified 54.9% are frontier-level; the fine-tune's own general reasoning rows remain unpublished (provisional).
- **Context window: 95/100.** Held: 1M total with 65K out; no retrieval verification for 100.
- **Multimodal: 15/100.** Held per platform metadata (text/code only), now with the explicit caveat that the launch post's "same foundational intelligence" wording leaves the modality-drop claim unverified in both directions — no vision row exists for this ID either way.
- **Coding: 90/100.** Held: CWE-Bench 47.2% on the Pareto frontier (independently computed by Collinear), the 2.6x Chrome patch multiplier, base-proxy SWE-bench V 80.0% / LiveCodeBench 89.5% / DeepSWE 73.8% — a hard-coding specialist profile, still capped by proxy reliance for general coding.
- **Cost efficiency: 65/100.** Raised from 50: the first pass scored "no public pricing, unknown" provisionally — the second pass established Flash-tier cost from three official vectors ("Flash speed and cost", CWE-bench Pareto at significantly lower cost, Wiz's 2.3-5.2x lower-cost measurement), moving the score to the paid Flash band with the gated-access caveat (program access, not per-token billing, remains the gate).
- **Overall Score: 74.6/100.** (85 + 88 + 95 + 15 + 90) / 5 = 74.6 — unchanged (Cost is excluded from the Overall); the second pass converted the model from "unknown cost, vendor-claims-only" to a deployment-measured defensive-security engine. Best-fit: the purpose-built defensive-security engine of the Gemini line — text/code-scoped, patching-prioritized, unmatched per-dollar in-domain (2.6x patches, 2.3-5.2x cheaper) — now sharing the Fairwind gate with the newer, stronger-at-discovery Gemini 4 Argon.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-12
- Method: public internet research, second pass over the 2026-09-24 report (Google's official 3.8 Flash + Flash Cyber launch post and Fairwind Program page, the official eval-methodology PDF (Collinear-computed CWE-bench, Antigravity harness), BenchLM cyber rows and cybersecurity category page, the Gemini 4 Argon launch post for the succession context, plus reviews: kingy, llm-stats, benchmarklist, hokai, gikiewicz, VentureBeat relay, theairankings, jigarjoshi, thegeocommunity, shattered, quasa, discoverai, laozhang, agentpedia; three successful web searches); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
