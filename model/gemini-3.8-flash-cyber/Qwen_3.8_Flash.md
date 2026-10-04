# Gemini 3.8 Flash Cyber — findings by Qwen 3.8 Flash

- Source: Google DeepMind / Gemini 3.8 Flash Cyber (`google/gemini-3-8-flash-cyber`)
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
- **Supersedes** my own `Qwen_3.8_Flash.md.excluded` twin (2026-10-02): that pass had no first-party spec sheet and self-excluded. The Google Cloud model documentation now publishes this ID's context limits and modality matrix, so Context and Multimodal are scoreable from verified evidence and the twin is retired per `tasks/research.md` Step 3.3.

## Model card

- **Name:** Gemini 3.8 Flash Cyber
- **Short description:** The cybersecurity-defence fine-tune of Gemini 3.8 Flash, tuned for autonomous vulnerability discovery and automated patching and shipped with more permissive cyber mitigations than the base model. **Variant flag:** post-training variant of `model/gemini-3.8-flash/` — same foundational core per Google, different weights/guardrails and a different access regime, so no general-capability numbers were borrowed between them.
- **Provider / access:** Gemini Enterprise Agent Platform / Vertex AI, model ID `gemini-3.8-flash-cyber`, **GA behind an allowlist** (global + `us` multi-region; Standard/Flex/Priority PayGo and Provisioned Throughput supported). Distributed to trusted defenders (governments, critical-infrastructure operators, software maintainers) via the **Fairwind Program**; subject to Section 31(a) of the Gemini Services Specific Terms. Not on OpenCode Zen, no public/self-serve API, no free ID.
- **Release / knowledge:** announced 2026-09-02; **GA release date 2026-09-16** per the platform docs. Knowledge cutoff not disclosed.
- **IDs:** `gemini-3.8-flash-cyber` (platform docs), curated `google/gemini-3-8-flash-cyber`; base sibling `gemini-3.8-flash`.
- **Context window:** 1,048,576 tokens / maximum output 65,536 — first-party platform specification (implicit + explicit context caching supported; no long-context retrieval benchmark published for this ID).
- **Modalities:** text, image, audio and video **input**; text output. Thinking supported, structured output supported, Count Tokens supported, agentic video understanding (preview) supported; **function calling, computer use, code execution, grounding, Live API, RAG Engine, tuning and batch inference are all listed as NOT supported** — an unusually narrow tool surface for an "agentic" model. Defaults: temp 1.0, topP 0.95, topK 64.
- **Pricing (as of 2026-10-04):** no public rate card for the Cyber variant (allowlist/Fairwind commercial terms); the base 3.8 Flash is $0.75 in / $3.75 out per 1M, and Google reports the Cyber model delivers +7.5–9.7 % recall on Wiz's internal pentest benchmark at **2.3–5.2× lower cost** than other leading frontier models.
- **Architecture:** proprietary post-training fine-tune of the Gemini 3.8 Flash core, with recursive long-running agentic refinement loops on top.

### Raw benchmarks found

All rows below are results reported **for the Cyber variant itself** (Google launch post 2026-09-02 plus third-party recaps); the base model's general rows (DeepSWE v1.1, HLE-Verified 54.9 %, Terminal-Bench 2.1 90.8 %, Vals Finance v2, Harvey LAB) belong to `model/gemini-3.8-flash/` and are not reused here.

Cyber / agentic (its instrumented domain):

- **CyberGym Pass@1: 86.2 %** — frontier-level autonomous vulnerability discovery; above 3.5 Flash Cyber's 77.5 % and above larger frontier models (vendor chart, echoed by kingy.ai / aivancity recaps)
- **CWE-Bench** (Collinear) **pass@1: 47.2 %** — automated patching, on the Pareto frontier against a leading frontier model at 47.8 % at markedly lower cost
- internal multi-language discovery benchmark: **> 70 %** success across complex codebases in 20 programming languages (vendor internal, not an external leaderboard)
- Chrome Security team: **2.6× more correct vulnerability patches** than the best (much larger) commercial models; Google Cloud Vulnerability Research found a critical foundational vulnerability in **< 2 hours** vs months of normal research
- **Gray Swan IPI** (indirect prompt injection, 15 attempts): **6.0 %** attack success — a step-change in injection robustness shared by the 3.8 release (safety result, not a capability score)
- Terminal-Bench 2.1 / τ² / τ³ / GDPval-AA / Toolathlon / Claw-Eval: **no verified public general-agent score found for this ID**

Reasoning / knowledge:

- GPQA Diamond / HLE / CritPt / AA Intelligence Index: **no verified public score found for the Cyber variant** (BenchLM still carries no computed overall for it)

Coding (general):

- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode: **no verified public general-coding score found for this ID**; only CWE-Bench patching above

Multimodal / long context:

- No MMMU / video / audio accuracy rows and no MRCR / RULER retrieval figure published for this ID; capability matrix only

### Normalized scores (1–100)

- **Tool use: 55/100.** Inside vendor-built discovery/patching loops it is demonstrably expert (CyberGym 86.2 %, Chrome 2.6× patch yield), but the first-party spec sheet lists **function calling, computer use, code execution and grounding as not supported**, so it cannot drive a general tool-calling agent — that structural cap is what keeps this dimension low rather than any weakness on its own turf.
- **Reasoning: 80/100.** Provisional, domain-derived: frontier vulnerability discovery and Pareto-frontier patching are long-horizon causal reasoning over real codebases, and the injection-robustness result (Gray Swan 6.0 %) shows strong threat-modeling; capped because no general GPQA/HLE/Index row exists for this variant and no independent leaderboard has replicated the cyber numbers.
- **Context window: 92/100.** 1,048,576 tokens with 65,536 max output and explicit context caching is a verified first-party ≥1M spec suited to whole-codebase analysis; held below 95+ because no retrieval measurement at 512 K+ has been published for the Cyber ID.
- **Multimodal: 90/100.** Text + image + audio + video input (up to 3,000 images, ~8.4 h audio, 10 videos, PDF) is the methodology's audio-in band per the official capability matrix; capped by text-only output and by the complete absence of published multimodal accuracy scores for this variant.
- **Coding: 78/100.** Best-in-class on security-coded work (CWE-Bench 47.2 % pass@1 within 0.6 pts of the frontier leader at a fraction of the cost, CyberGym 86.2 %, >70 % cross-language discovery) but the evidence is narrow: no SWE-bench/LiveCodeBench row for this ID, so general repository engineering is unproven.
- **Cost efficiency: 55/100.** Relative token cost is excellent (2.3–5.2× cheaper than rival frontier models on Wiz's benchmark, Flash-class speed), but there is **no public price and access is allowlist/Fairwind-gated with contractual use restrictions** — availability risk dominates the dollar figure for everyone outside the trusted-defender set.
- **Overall Score: 79/100.** Mean of the five quality dimensions (55 + 80 + 92 + 90 + 78) / 5 = 79; Cost excluded per `RULES.md`. Best fit: defensive security review, vulnerability discovery and patch generation for Fairwind-eligible teams — not a general coding or tool-calling agent.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-04
- Method: fresh public internet research (Google blog launch post, Gemini Enterprise Agent Platform model documentation, Collinear/CWE-Bench and Gray Swan results via third-party recaps); scores are normalized 1–100 interpretations, not official vendor scores, and no values were borrowed from the base 3.8 Flash report.
- Future sources: add a new file next to this one, e.g. `Grok_4.6.md`, using the same headings.
