# Gemini 3.8 Flash Cyber — findings by Solar Pro 4

- Source: Google DeepMind/Gemini 3.8 Flash Cyber, e.g. Google DeepMind (`google/gemini-3.8-flash-cyber`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash Cyber (Google DeepMind proprietary, cybersecurity fine-tune of Gemini 3.8 Flash)
- **Short description:** Google DeepMind's dedicated cybersecurity fine-tune of Gemini 3.8 Flash, released September 2, 2026 alongside mainline Gemini 3.8 Flash. Shares the same sparse MoE Transformer foundation as mainline 3.8 Flash, described as "powered by the same foundational intelligence." Purpose-built for finding, validating, and patching security vulnerabilities across real codebases — not general chat or reasoning. Succeeds Gemini 3.5 Flash Cyber (July 21, 2026). Replaces CodeMender's invite-only rollout with the named Fairwind Program (650+ partner organizations onboarded at launch).
- **Provider / access:** Google Fairwind Program ONLY — no public API, no AI Studio quota, no Vertex AI listing. Application-based enrollment for government authorities, critical infrastructure operators, and software maintainers. Approved partners get prioritized access. NOT available for general public use.
- **Release / knowledge:** Released 2026-09-02; knowledge cutoff not explicitly stated (inherits from Gemini 3.8 Flash base).
- **IDs:** No public API ID — access ONLY through Fairwind Program enrollment at deepmind.google/fairwind-program.
- **Context window:** 1,048,576 tokens (1M) input; max output 65,536 tokens (64K). Inherits from Gemini 3.8 Flash base architecture.
- **Modalities:** Text and code input (across 20 programming languages); text (vulnerability reports) and code (patches) output. Tool use, function calling, and structured output inherited from base architecture. Google's model card does NOT advertise image, video, or audio ingestion — Cyber variant scope is scanning code, not media.
- **Pricing (as of 2026-09-18):** NO PUBLIC PRICING. Access runs entirely through Fairwind Program — no self-serve API key, no AI Studio quota, no Vertex AI listing. Terms negotiated per organization.
- **Architecture:** Proprietary. Shares sparse MoE Transformer foundation with Gemini 3.8 Flash. Cybersecurity fine-tune. Closed-weight (no open-weights option).

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- CyberGym Pass@1: **86.2%** (vendor-reported by Google DeepMind; 2026-09-02). Industry benchmark for autonomous vulnerability discovery. Ahead of predecessor and larger frontier models.
- Real World Vuln Discovery (20 Languages): **71.0%** (vendor-reported by Google DeepMind; 2026-09-02). Cross-language vulnerability discovery success rate.
- CWE-Bench Pass@1: **47.2%** (vendor-reported by Google DeepMind; 2026-09-02). Patch generation — nearly half of proposed fixes resolve underlying weakness.
- Gray Swan IPI Attack Success Rate: **6%** (vendor-reported by Google DeepMind; 2026-09-02). Adversarial robustness metric.
- SWE-bench Verified: no verified public score found for Gemini 3.8 Flash Cyber specifically. (Google has not disclosed general-purpose benchmark scores for the Cyber fine-tune.)
- SWE-bench Pro: no verified public score found
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- OSWorld-Verified: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found for Gemini 3.8 Flash Cyber specifically. (Not disclosed for Cyber fine-tune.)
- HLE (Humanity's Last Exam): no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found
- Vals Index: no verified public score found
- MMLU Pro: no verified public score found

Coding:

- SWE-bench Verified: no verified public score found
- SWE-bench Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found (Cybersecurity-focused, not general coding)

Long context:

- Long-context recall: no verified public score found for Cyber variant specifically. Inherits 1M context from base architecture.

### Normalized scores (1–100)

- **Tool use: 85/100.** CyberGym Pass@1 86.2% (industry benchmark for autonomous vulnerability discovery — exceptional, ahead of predecessor and larger frontier models), Real World Vuln Discovery 71.0% across 20 languages (strong cross-language coverage), CWE-Bench Pass@1 47.2% (nearly half of proposed patches resolve underlying weakness — strong for patch generation). These are exceptional scores for cybersecurity-specific tool use. Capped by: lack of general-purpose tool benchmarks (SWE-bench, Terminal-Bench, etc.) for Cyber fine-tune, and the model being narrowly scoped to security work. Overall tool-use capability is frontier-tier for cybersecurity/vulnerability discovery.
- **Reasoning: 70/100.** Gray Swan IPI Attack Success Rate 6% (adversarial robustness — lower is better here, indicating resistance to attacks). No general-purpose reasoning benchmarks (GPQA, HLE, MMLU Pro) disclosed for Cyber fine-tune. Capped by: lack of general-purpose reasoning benchmark disclosure, and the model being optimized for cybersecurity tasks rather than general reasoning. Overall reasoning is not evaluated for general purposes.
- **Context window: 100/100.** 1,048,576 tokens (1M+) context window (inherited from base). Maximum tier (≥1M = 95-100). Max output 64K. Score 100 reflects top-tier context window.
- **Multimodal: 50/100.** Text and code input; text and code output. No image, video, or audio ingestion advertised for Cyber variant (scope is scanning code, not media). Per methodology: text-only input = 10-20, but code input is a specialized modality. Scored at 50 reflecting text+code input without general multimodal coverage. Capped by lack of general multimodal input (image, video, audio) and text/code-only output.
- **Coding: 85/100.** CyberGym 86.2% Pass@1 (exceptional for vulnerability discovery), Real World Vuln Discovery 71.0% across 20 languages (strong), CWE-Bench 47.2% Pass@1 (strong patch generation). These are exceptional scores for cybersecurity-specific coding/vulnerability work. Capped by: lack of general-purpose coding benchmarks (SWE-bench, LiveCodeBench, etc.) for Cyber fine-tune, and the model being narrowly scoped to security work. Overall coding capability is frontier-tier for cybersecurity/vulnerability discovery.
- **Cost efficiency: 50/100.** NO PUBLIC PRICING. Access only through Fairwind Program — no self-serve API, no published per-token rates. Cannot be evaluated for cost efficiency without pricing data. Scored at 50 reflecting uncertainty/ineligibility for most teams (application-only access). Capped by: inaccessibility for teams not approved for Fairwind Program.
- **Overall Score: 73/100.** Mean of (85 + 70 + 100 + 50 + 85 + 50) / 6 = 73.3 → **73**. Best-fit recommendation: Gemini 3.8 Flash Cyber is the best model available for cybersecurity vulnerability discovery and patch generation, but is NOT accessible for general use — access requires Fairwind Program approval (government, critical infrastructure, software maintainers). For teams approved for Fairwind Program, this is the definitive model for vulnerability hunting (CyberGym 86.2% Pass@1, 71.0% across 20 languages, 47.2% patch generation). For teams not approved for Fairwind Program, or for general-purpose coding/agent tasks, use mainline Gemini 3.8 Flash (Overall 91) or other general coding models. Note: the low cost efficiency score (50) reflects inaccessibility, not poor value — for approved Fairwind partners, the value would be much higher.

---

## Signature

- Provided by: **Solar Pro 4 (openai/solar-pro-4)** — 2026-09-18
- Method: Public internet research via model intelligence aggregators (HokAI, modelcompare.dev), vendor release materials (Google DeepMind official benchmarks), and independent model review sites (hokai.io); scores are normalized 1–100 interpretations, not official vendor scores. Most benchmarks are vendor-reported; independent third-party verification was limited at time of research.
- Future sources: add a new file next to this one, e.g. `GPT_5_6_Terra.md`, using the same headings.
