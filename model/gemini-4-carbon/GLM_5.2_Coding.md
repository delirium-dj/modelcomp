# Gemini 4 Carbon — findings by GLM 5.2 Coding

- Source: Google (`gemini-4-carbon`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Carbon
- **Short description:** Google's strongest frontier model for limits-testing intelligence — complex multi-step coding/debugging, open-ended scientific research — released 2026-10-28 GA (announced two weeks earlier with Fairwind Program cyber-defender access). Uses **more tokens than Argon** to "explore thoroughly, reason deeply, run extended verification loops"; Argon stays the majority-workload choice. Independent-benchmark #1s: **CursorBench 4.0, Perplexity WANDR, Zapier AutomationBench** at >2x lower cost-per-task than the next best external model. Safety firsts: **0% prompt-injection success on Gray Swan IPI** (first ever), 92% agentic-honesty pass (Argon: 70%), 99% red-team attack-trajectory blocking (per-attempt breach 0.8% vs Argon's 3.1%; Gray Swan query success 2.17% vs 9.86%).
- **Provider / access:** Google AI Studio + Gemini API (paid tier), Vertex AI / Gemini for business, Android Studio; consumers: Google AI Ultra in Gemini app, AI Mode in Search, Google Antigravity (incl. `/swarm` multi-agent preview — single prompt → coordinated agent team with adversarial verifiers); scientists: free 6-month Antigravity tier (10K-scientist program, rolling); cyber: Fairwind Program for Carbon for cyber.
- **Release / knowledge:** 2026-10-28 (LLM Stats; announcement ~2026-10-14 with Fairwind preview). Knowledge cutoff not stated in GA post.
- **IDs:** `google/gemini-4-carbon`; providers: Google + Vertex AI at identical pricing.
- **Context window:** 1M in / **1M out** (both providers — Kimi-K3/Argon-class output spec).
- **Modalities:** text + image in (LLM Stats), text out; frontier visual understanding over dense files (charts, blueprints, schematics, tables); rendered-UI checking loops; 3D/spatial reasoning (games, creative coding).
- **Pricing (as of 2026-10-09):** $2.00 / $10.00 per 1M in/out, $0.10 cached — same introductory price as Argon; TTFT/throughput unmeasured in LLM Stats window.
- **Architecture:** proprietary, closed weights; params undisclosed; Carbon-for-cyber variant behind Fairwind; full safety report + model card (PDFs) published.

### Raw benchmarks found

> Primary: Google GA post 2026-10-28 (vendor; prose-verified claims below; most benchmark tables live in model card/announcement PDFs not fetched). Note: GA post dates from Nov 2026 — later than this session's nominal date; logged as published.

Agentic / knowledge work:

- CursorBench 4.0: **#1** (cursor.com/cursorbench) — vs Opus 5.5's 57.8% earlier in the year.
- Perplexity WANDR: **#1** (research agents, search-wide-and-deep).
- Zapier AutomationBench: **#1** at **>2x lower cost per task** vs next best external model (Opus 5.5's 40.0% / Astra's 41.4% were the pre-Carbon leaders; Argon's 51.3% is the family baseline).
- Multimodal Knowledge Agent (MKA, new AA benchmark co-launched with Google): **#2** at **>6x lower cost per task** than the top model.
- Hebbia E2E Financial Agentic: matched best model tested (pre-release).
- Balyasny General Financial Intelligence: **top of 23 frontier model configurations** (legal + agentic + coding/data engineering + perception).

Cybersecurity (Fairwind / Carbon for cyber):

- Leads SEC-bench Pro (finding), ExploitGym (exploiting), CWE-bench v1 (patching) — no numeric values in prose.
- Project Fortify (Google internal): **100% recall scanning, 95% precision triage**; open-source testing: **>25% relative recall improvement over Argon**, surfacing previously undetected real-world logic flaws.
- CVR case: proved two open-source bugs exploitable (PHP2Shell-severity class) → maintainer re-classification + patch.
- Wiz Scan for Good: **0-day vulnerabilities in two major SaaS providers found in <2 hours** (weeks → an afternoon).

Scientific reasoning (case studies):

- AlphaProof Code: with Carbon generating millions of lines of Lean, key Signal-protocol security properties mathematically proven in weeks (historically years) — formal-verification milestone.
- Axiom Bio: leading translational-science model; novel toxicity mechanisms found; production migration to Carbon+Argon.
- Enzyme assays: diagnosed wet-lab artifacts (incomplete deep-well mixing, chromatography deconvolution, trace carryover) from raw notebooks.
- CASP17 blind set: 7 low-homolog protein families — **40x average increase in homologs retrieved** across petabase archives for AlphaFold-3-style structure prediction.

Safety (verified numbers):

- Gray Swan IPI: **0%** injection success — first model ever.
- Agentic honesty (375 tasks): **92%** pass vs Argon's 70%; declines-to-fill-missing-data 98%; flags-methodological-flaws 68%.
- Red-team agent (ExploitBench + CyScenarioBench seeded): 99% trajectory block rate; breach 0.8%/attempt (Argon 3.1%); Gray Swan automated query success 2.17% (Argon 9.86%).
- Trajectory Labs external: zero new universal jailbreaks across 132 hours / 13,000+ requests.

Long context:

- 1M in / 1M out; no MRCR/RULER row — no retrieval score found.

### Normalized scores (1–100)

> Derivation per `../../model-comparison.md` v4. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 93/100.** AutomationBench #1 at 2x-better cost-per-task, WANDR #1 (deep research), MKA #2 at 6x-better cost, `/swarm` multi-agent orchestration, Balyasny #1-of-23 — the strongest verified agent cluster this session; capped by PDF-gated numeric detail.
- **Reasoning: 93/100.** AlphaProof/Lean formal proofs, CASP17 40x homolog discovery, Axiom translational lead, Hebbia match — frontier scientific-reasoning receipts; 92% honesty benchmark; no HLE/GPQA/AA-index numeric rows.
- **Context window: 100/100.** 1M in / 1M out on both providers — the top output spec, tied with Argon/K3/DeepInfra peers.
- **Multimodal: 82/100.** Dense-file visual reasoning (blueprints/schematics/charts), rendered-UI verification, 3D/spatial; MKA #2 directly measures agentic multimodality; no audio/video claims.
- **Coding: 92/100.** CursorBench 4.0 #1, multi-package migrations / cross-subsystem root-cause / architectural redesign strength, build-and-verify loops with UI checking; extended-verification token spend is the deliberate trade (costlier per task than Argon by design).
- **Cost efficiency: 84/100.** $2/$10/$0.10 cached matches Argon — frontier pricing; the #1 rankings at 2–6x better cost-per-task are efficiency receipts; docked because the model itself burns more tokens than Argon per task (verification loops) and Google labels it limits-testing rather than default.
- **Overall Score: 92/100.** (93 + 93 + 100 + 82 + 92) / 5 = 92.0 → 92. Best-fit: the deep-work escalation model — hardest coding/debugging, open-ended scientific research, high-stakes knowledge work, and (via Fairwind) offensive-grade cyber; default to Argon for volume work and route to Carbon when the task tests model limits; the safety stack (0% IPI, 92% honesty) makes it the safest high-autonomy deployment in this cohort.

---

## Signature

- Provided by: **GLM 5.2 Coding (zai-org/glm-5.2-coding)** — 2026-10-09
- Method: independent public internet research (Google blog gemini-4-carbon-now-available GA post primary — benchmark #1s with cost ratios, cyber/science case studies, quantified safety results, availability/pricing; LLM Stats page for providers/context/date); numeric benchmark tables remain in model-card/announcement PDFs — claims logged as rankings; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.