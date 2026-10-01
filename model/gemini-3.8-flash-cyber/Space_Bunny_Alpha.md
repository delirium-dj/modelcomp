# Gemini 3.8 Flash Cyber — findings by Space Bunny Alpha

- Source: Google DeepMind (`gemini-3.8-flash-cyber`; distributed only via the Fairwind Program)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Correction to my own earlier report.** A previous Space Bunny Alpha file for this
> slug scored it **58.6/100**. Re-researched 2026-10-01, it scores **84/100**. The
> earlier figure appears to have scored only the Cyber variant's own narrow published
> evidence — two security benchmarks — and treated the absence of general-purpose
> benchmarks *for the Cyber variant specifically* as absence of capability. Google
> states the variant "**shares the same foundational intelligence**" as Gemini 3.8
> Flash and that the two "share the same underlying model; what differs is which
> capabilities are switched on and who can reach them." The inherited baseline is
> flagged explicitly throughout below rather than silently transferred.

## Model card

- **Name:** Gemini 3.8 Flash Cyber
- **Short description:** Google's most capable **cybersecurity-specialised** model, released **2026-09-02** alongside Gemini 3.8 Flash — the third Flash release in six weeks, and the second in Google's Cyber lineage after Gemini 3.5 Flash Cyber (July). It is **explicitly defender-oriented**: "the model is designed specifically for defenders," with "more permissive cyber mitigations than the standard model," which is precisely why it is gated rather than shipped as a public API. Its stated capabilities are **frontier-level autonomous vulnerability discovery** across codebases spanning **20 programming languages**, and **automated patching**. Distinct variant with its own access regime, not an alias of `gemini-3.8-flash`.
- **Provider / access:** **Restricted — not general release.** Available only to a set of **trusted defenders via Google's new Fairwind Program**, opened at the same time as the models to **trusted government authorities, critical-infrastructure operators, and software maintainers specifically**, by application. Predecessor Gemini 3.5 Flash Cyber went out through the CodeMender agent to governments and partners; **the access mechanism changed**, which is the substantive governance difference between the two Cyber models.
- **Release / knowledge:** released **2026-09-02**. Knowledge cutoff not separately published for the Cyber variant.
- **IDs:** `gemini-3.8-flash-cyber`. Base model for capability inheritance: `gemini-3.8-flash`.
- **Context window:** **1,000,000 tokens, 64,000 max output** (Google AI developer docs, stated for Gemini 3.8 Flash). Tunable thinking levels `low` / `medium` / `high`, default `medium`.
- **Modalities:** **text, images, audio and video in; text out** (Google DeepMind model card for 3.8 Flash). Base-model vision is measured and strong — **CharXiv Reasoning 86.2%**, **LVBench long-video 87.8% agentic / 87.1% static**, **GDP.PDF 35.0% all-pass** — so this is the full omni surface, not a text-only security model. **No Cyber-specific modality restriction was published.**
- **Pricing (as of 2026-10-01):** **$0.75 / MTok input, $3.75 / MTok output** (output includes thinking tokens) — the **introductory rate**, identical to Gemini 3.7 Flash, and **available only to Fairwind Program participants**. **The introductory price expires 2026-12-31; from 2027-01-01 the rate is $1.50 / $7.50.** Google and Wiz both position the current rate as **2.3–5.2× cheaper per token than leading frontier models**.
- **Architecture:** proprietary MoE-family transformer. Not separately specified for the Cyber variant; it shares 3.8 Flash's foundations.
- **Safety:** both 3.8 models ship with **CBRN and cyber-offense misuse safeguards under Google's Frontier Safety Framework**; the Cyber variant runs a deliberately more permissive mitigation set, which is the reason for the Fairwind gate.

### Raw benchmarks found

**Cyber-variant-specific, published:**

- **CWE-Bench pass@1: 47.2%** — run by **Collinear**, an external benchmark for vulnerability patching. Against a leading frontier model at **47.8%**: a gap of **0.6 percentage points**, at 2.3–5.2× lower cost. Google frames this as sitting on the Pareto frontier, and the framing is defensible on the numbers.
- **Internal 20-programming-language vulnerability-discovery benchmark: success rate >70%** — Google's own benchmark, built because "real-world defensive work is not limited to just C/C++ codebases." Google calls it "an impressive leap" over previous models. Samir Sengupta's fair criticism: the announcement does not say **which** 20 languages, whether performance is uniform across them, or how it compares to 3.5 Flash Cyber numerically.
- **CyberGym: 86.2% pass@1** (LLM Stats, sourced to Google's scorecard). Google's own announcement makes only a **qualitative** claim here — that it "surpasses both 3.5 Flash Cyber as well as significantly larger frontier models" — with no number printed; the 86.2% is from the scorecard rather than the blog post.
- **Internal real-world benchmark recall: 71.0%** (LLM Stats).
- **Gray Swan prompt-injection robustness: "a significant leap"** — **no score quoted** in the announcement.

**Real-world deployment results, named teams rather than charts:**

- **Chrome Security team: 2.6× more correct patches** to Chrome vulnerabilities than "the best commercial models that are much larger."
- **Wiz: +7.5–9.7% higher recall** on their internal penetration-testing benchmark at **2.3–5.2× lower cost** than leading frontier models.
- **Google Cloud Vulnerability Research team: found a critical foundational vulnerability in under 2 hours**, where comparable research "usually takes months."
- Laura Martel's fair characterisation: "These are still vendor-selected examples rather than independent audits, but they're at least attached to named teams and concrete multipliers rather than a chart alone."

**Inherited from the Gemini 3.8 Flash base — Google states the two "share the same underlying model." Recorded as inherited, not as Cyber-specific measurements:**

Agent / tool use: **Terminal-bench 2.1 89.4%** (3.7 Flash 85.8%, Claude Opus 5 89.1%, GPT-5.6 Sol 88.8%) · **Terminal-bench 4.0 19.1%** (Claude Opus 5 51.8% — the widest gap in Google's own table) · **OSWorld-2.0 59.0%** partial-score batch-tool (Opus 5 75.4%) · **GDPVal-AA v2 Elo 1545** (Opus 5 1824, GPT-5.6 Sol 1710, Sonnet 5 1584)

Reasoning / knowledge: **HLE-Verified 54.9%** (Opus 5 54.4%, Sol 54.5%, Sonnet 5 31.0%) · **BioMysteryBench 88.8% human-solvable / 56.5% human-difficult** (Opus 5 90.1% / 49.4%) · **LABBench2 86.2%** · **Harvey's Legal Agent Benchmark 10.0% all-pass** — Google **leads** this row, with the whole field clustered in single digits · **Vals Finance Agent v2 61.4%** — also a Google-led row (Opus 5 58.6%, Sol 53.8%). Note DataCamp's caveat that HLE moved little generation-over-generation (45.4% vs 3.7 Flash's 45.7% on their reading).

Coding: **DeepSWE v1.1 73.7%** long-horizon software engineering (Opus 5 74.0%, Sol 72.7%, 3.7 Flash 65.3%)

Long context: **LVBench 87.8% agentic / 87.1% static** on long-video understanding (Opus 5 75.4%, Sol 82.1%)

Vision: **CharXiv Reasoning 86.2%** no-tools (Opus 5 83.7%, Sol 85.8%) · **GDP.PDF 35.0%** all-pass (Sol 40.0%, Opus 5 37.0%)

No **SWE-bench Verified, LiveCodeBench, SciCode, GPQA Diamond, Tau3-Banking, Claw-Eval or MCP-Atlas** figure was found for either the Cyber variant or the base model. No MRCR, RULER or GraphWalks retrieval measurement was found for the 1M window.

### Normalized scores (1–100)

> **Inheritance caveat, stated once and applied throughout:** four of the five quality
> dimensions below are scored **partly on Gemini 3.8 Flash's published base-model
> numbers**, on Google's explicit statement that the two "share the same underlying
> model." Cyber tuning is very unlikely to have *reduced* general capability, but it is
> also not measured directly for this variant on any general-purpose benchmark. Each
> affected line says so explicitly.

- **Tool use: 84/100.** Strong on both the security-specific and inherited evidence. Cyber-specific: **CWE-Bench 47.2% pass@1**, within 0.6 points of a leading frontier model on an externally-run patching benchmark, and **>70% success on the internal 20-language discovery benchmark** — patching is the harder half and it is the half measured closest to the frontier. Inherited: **Terminal-bench 2.1 at 89.4%**, a frontier-tier terminal-agent number, and **OSWorld-2.0 59.0%** on agentic computer use. Capped at 84 by the single genuinely weak figure in the whole record — **Terminal-bench 4.0 at 19.1% against Claude Opus 5's 51.8%**, a 32-point gap that Laura Martel correctly identifies as "the widest gap anywhere in the table," and the one row built specifically to be hard. Plus **GDPVal-AA Elo 1545 versus Opus 5's 1824**, which says the model is a strong specialist rather than a strong generalist.
- **Reasoning: 78/100.** Above the methodology's mid-band, with the evidence flagged as largely inherited. Inherited: **HLE-Verified 54.9%**, level with Opus 5 (54.4%) and GPT-5.6 Sol (54.5%) and far above Sonnet 5 (31.0%); **BioMysteryBench 56.5% on the human-difficult split**, a **+13.0 gain over 3.7 Flash's 43.5%** and above Opus 5's 49.4%; **Vals Finance Agent v2 61.4%** where Google leads the field. The **Harvey's Legal Agent Benchmark at 10.0% all-pass** is a genuine Google-led win in a row where the entire field sits in single digits, which is a meaningful signal about professional-work reasoning depth. Capped at 78 by **no GPQA Diamond, CritPt, FrontierMath or ARC-AGI figure existing for either model**, and by DataCamp's fair observation that HLE specifically was **flat generation-over-generation** — the gains are in specialised professional and scientific domains, not in broad academic reasoning.
- **Context window: 93/100.** **1,000,000 tokens with 64,000 max output** (Google AI developer docs). Scored in the methodology's 85–94 "500K–1M" band rather than the 95–100 ≥1M band because **no retrieval measurement exists at any length** — no MRCR, no RULER, no GraphWalks — so the 98%-at-512K threshold cannot be met or tested. The one long-context-adjacent number is strong but is about *video* rather than text retrieval: **LVBench at 87.8% agentic**, well ahead of Opus 5's 75.4%. A 1M window on a model whose measured competence is at the multimodal long end rather than the retrieval end is a spec that happens to be well-matched to its strengths.
- **Multimodal: 85/100.** **Text, image, audio and video in; text out** — the methodology's "+video/PDF in = 75–90" band, scored in its upper half. Inherited from the base and measured there: **CharXiv Reasoning 86.2%**, where 3.8 Flash **leads** Opus 5 (83.7%) and Sol (85.8%) on synthesising information from complex scientific charts; **LVBench 87.8% agentic** on long-video understanding, ahead of every model in Google's table including Opus 5; **GDP.PDF 35.0%** all-pass on expert document comprehension. That combination — chart reasoning, long video, and native PDF — is the strongest multimodal profile Google has shipped at Flash pricing. Capped at 85 rather than 90 because **no MMMU, MMMUPro or DocVQA figure was found** and no Cyber-specific modality behaviour was published.
- **Coding: 82/100.** Strong, and the inherited evidence is unusually good for a model this cheap. **DeepSWE v1.1 at 73.7%** on long-horizon software engineering is a **+8.4 gain over 3.7 Flash's 65.3%** and within 0.3 points of Claude Opus 5's 74.0% — Google's own framing is that 3.8 Flash "outperforms most larger frontier models in autonomously solving complex engineering problems end to end, only at a fraction of the cost." **Terminal-bench 2.1 at 89.4%** corroborates. Capped at 82 rather than the high 80s by the total absence of **SWE-bench Verified, LiveCodeBench, SciCode and Aider Polyglot** figures, by **Terminal-bench 4.0 at 19.1%**, and by one honest operational note Laura Martel raises: the model "works harder" on complex tasks — more reasoning steps, more iterative tool calls — which "can mean more tokens burned at higher effort levels than 3.7 Flash used on the same task."
- **Cost efficiency: 80/100.** **$0.75 / $3.75 per MTok** introductory, **rising to $1.50 / $7.50 on 2027-01-01**, and available **only to Fairwind Program participants**. Scored at 80 rather than near the ~$0.60/$2.20 ≈ 92 anchor for the current rate because the rate is **temporary and the step is a doubling on both lines**. The efficiency case is nonetheless strong and independently corroborated: **2.3–5.2× cheaper per token than leading frontier models** (Google and Wiz agree), and Wiz specifically measured that cost gap **against a realised recall gain of +7.5–9.7%** rather than in isolation. Two honest deductions: the **introductory price expires inside three months of this report**, and **access is gated**, so for anyone outside the Fairwind Program this model is not purchasable at any price — a real constraint that the rate card alone does not convey.
- **Overall Score: 84/100.** (84 + 78 + 93 + 85 + 82) / 5 = 84.4 → **84**. Best fit, stated with the access condition attached: **a security team inside the Fairwind Program doing autonomous vulnerability discovery and patch generation at scale** — exactly the workflow Wiz measured, where a 2.3–5.2× per-token saving across hundreds of findings a day is the deciding factor and CWE-Bench shows the patching quality holds within 0.6 points of a frontier model. Chrome Security's **2.6× more correct patches** and Google's own team finding a critical vulnerability in under two hours are the strongest real-world evidence any specialised model in this dataset carries. **Outside the Fairwind Program, use Gemini 3.8 Flash** (`gemini-3.8-flash`), which shares the same foundation, is generally available, and carries the same numbers at the same introductory price. The one thing to watch is **Terminal-bench 4.0 at 19.1%**: this is a deep specialist, not a general agent, and the Cyber tuning reinforces rather than offsets that shape.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-10-01
- Method: public internet research, **second pass, superseding this agent's own earlier 58.6/100 report for the same slug.** Sources: Google DeepMind's Gemini 3.8 Flash Cyber model page (`deepmind.google/models/gemini/cyber/`) for the CWE-Bench 47.2% Pareto claim, the internal 20-language >70% result, the Chrome/Wiz/Cloud-Vulnerability-Research case studies, the Frontier Safety Framework position and the Fairwind gating; Google's launch blog (`blog.google/.../3-8-flash-and-3-8-flash-cyber/`) for the release date, the shared-foundation statement, the $0.75/$3.75 introductory rate with the 2027-01-01 step to $1.50/$7.50, and the CyberGym qualitative claim; **Gemini 3.8 Flash's DeepMind model card** for the full 14-benchmark comparison table inherited across four of five dimensions; Google AI's developer documentation for the 1M context, 64K max output, thinking levels and GA status; DataCamp's release analysis for the 3.7→3.8 deltas and the HLE-flat caveat; Laura Martel's analysis for the 8-to-5 split analysis, the Terminal-bench 4.0 gap, the token-burn observation and the Fairwind-vs-CodeMender governance shift; Samir Sengupta's independent write-up for the fair criticisms of the internal benchmark; and LLM Stats for the CyberGym 86.2% and internal recall 71.0% figures. Scores are normalized 1–100 interpretations per `model-comparison.md`, not official vendor scores. **Every inherited base-model figure is labelled as inherited**, Google's own stated CyberGym claim is distinguished from the scorecard number, and vendor-selected deployment case studies are labelled as such rather than treated as independent audits.
- Future sources: add a new file next to this one, e.g. `Gemini_3_9_Flash_Cyber.md`, using the same headings. Re-score when the **introductory pricing expires on 2027-01-01** (the Cost line is the one most exposed to change), and when any **Cyber-specific** general-purpose benchmark is published — four of five quality dimensions here currently rest on Google's shared-foundation statement rather than on measurements of this variant.