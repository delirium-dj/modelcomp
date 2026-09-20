# Claude Mythos 5.1 — findings by GLM 5.3 Flash

- Source: Anthropic (`claude-mythos-5-1` — Project Glasswing trusted access)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> Discovered during Claude Fable 5.1 research (Step 2, dynamic discovery): Anthropic's gated twin of Fable 5.1 carries its own product ID, access program and cyber benchmark rows but had no folder. Appended at queue end.

## Model card

- **Name:** Claude Mythos 5.1 (same weights as Fable 5.1; safeguards lifted for vetted users; no Free tier)
- **Short description:** The trusted-access twin of Claude Fable 5.1 — identical model with select safeguards lifted for vetted cybersecurity and life-sciences users, enabling defensive vulnerability work the GA model declines. Powers Anthropic's Claude Security product; available only through Project Glasswing.
- **Provider / access:** Anthropic API (`claude-mythos-5-1`) — approved customers only, via Project Glasswing's Cyber Verification Program (CVP) and Life Sciences Verification Program (LSVP); EU legal entities can apply since September 11, 2026. Powers Claude Security. Not on OpenCode Zen (no Zen Free ID).
- **Release / knowledge:** Launched September 1–2, 2026 alongside Fable 5.1 (same announcement). Knowledge cutoff June 2026 (same as Fable 5.1).
- **IDs:** `claude-mythos-5-1` (predecessors: Claude Mythos 5, Claude Mythos Preview).
- **Context window:** 1,000,000 tokens / 128,000 max output — inherited from Fable 5.1 (same model); platform docs for the gated deployment were not directly verified this pass.
- **Modalities:** Text, image, PDF in; text out (same as Fable 5.1). Thinking: adaptive, always on; effort low–max. Expanded offensive-cyber capability surface (exploit development permitted for vetted defenders) is the headline difference.
- **Pricing (as of 2026-09-19):** No public rate card — Fairwind-style contractual terms within Glasswing; token pricing presumed aligned with Fable 5.1's $10/$50 but unverified (flagged).
- **Architecture:** Proprietary, closed weights; identical weights to Fable 5.1 ("the same model but with different levels of safeguards" per Anthropic).

### Raw benchmarks found

Agent / tool use:

- CyberGym (final-submission setting): **83.8%** (Google's Gemini 3.8 Flash Cyber comparison table, "Mythos 5" row — behind GPT-5.5-Cyber 85.6%; harness owned by Google)
- CWE-Bench-class audit rows for Mythos: not surfaced this pass (Fable 5.1 posts 47.2–47.8% on the held-out audit-and-patch benchmark)
- Harvey LAB (Vals): **11.3%** (xAI launch table, Fable-5 column)
- GDPval-AA v2: **1741** (xAI table, Fable-5 weights); AA-Briefcase: **1574**
- APEX-Agents: **59.2%**; APEX-SWE: **58.8%**; Terminal-Bench v3.0: **34.1%** (xAI table, Fable-5 weights)

Reasoning / knowledge (Fable-5.1 weights, published rows):

- HLE (with tools): **65.0%** (#1 at publication); GPQA Diamond: **93.7%**; ARC-AGI-2: **90.0%**; AA Intelligence Index: **65.7** (v4.2) / **53** (v4.3.2, tie #1 with GPT-6 Astra); AA-Omniscience: **43.45** (#1/28)

Coding:

- SWE-bench Verified: **93.9%** — logged against "Claude Mythos Preview" on the LLMReference SWE-V ladder (predecessor weights; treat as indicative, not 5.1-verified)
- SWE-bench Pro: **81.2%** (#1/49, Fable-5.1 weights); SciCode: **62.0%** (#1/458); DeepSWE 1.1: **67.4%**; CursorBench 3.2: **70.5%** (Fable-5 column); FrontierCode 1.1 Extended: **63.6%**
- Distinct capability: exploit development and vulnerability patching workflows that GA Fable declines (Anthropic framing; ExploitBench-class rows not published for 5.1)

Long context:

- 1M window; AA-LCR 80.0% (98th percentile, Fable-5.1 weights)

### Normalized scores (1–100)

- **Tool use: 92/100.** Fable-5.1-weight rows (GDPval 1741–1853 class, Briefcase 1574+) plus the CyberGym 83.8% security-agent evidence and permissive cyber surface — capped by Google-harness provenance on the cyber rows.
- **Reasoning: 94/100.** Identical weights to Fable 5.1: HLE 65.0% (#1), GPQA 93.7%, AA-Omniscience #1, Index 65.7/53 tie-#1.
- **Context window: 95/100.** 1M window with 80.0% AA-LCR (Fable-5.1 evidence); MRCR-at-depth unverified for the gated deployment.
- **Multimodal: 82/100.** Text/image/PDF in with Fable-5.1-class grounded-vision rows; text-only output.
- **Coding: 93/100.** SWE-Pro 81.2% #1 and SciCode 62.0% #1 on the shared weights, with SWE-V 93.9% corroboration from the Mythos Preview ladder; exploit-development capability adds a defensive-coding dimension Fable cannot ship.
- **Cost efficiency: 30/100.** No public rate card; presumed Fable-5.1-class $10/$50 premium pricing under contract — scored at that anchor pending verified terms.
- **Overall Score: 91.2/100.** (92+94+95+82+93)/5 = 91.2. Best fit: vetted defensive-security and life-science teams that need Fable-5.1-class reasoning with the safety envelope lifted — unobtainable without Glasswing approval.

---

## Signature

- Provided by: **GLM 5.3 Flash (zai/glm-5.3-flash)** — 2026-09-19
- Method: public internet research (fresh web search: explainx launch analysis, Apidog Fable/Mythos guides, Kingy CyberGym table, xAI evals table, LLMReference SWE-V ladder); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
