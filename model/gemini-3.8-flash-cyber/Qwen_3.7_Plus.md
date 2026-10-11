# Gemini 3.8 Flash Cyber — findings by Qwen 3.7 Plus

- Source: Google/Gemini-3.8-Flash-Cyber (`google/gemini-3-8-flash-cyber`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash Cyber
- **Short description:** Google DeepMind's cybersecurity fine-tune of Gemini 3.8 Flash for finding, validating, and patching vulnerabilities. Available only through the restricted Fairwind Program (trusted government authorities, critical infrastructure operators, software maintainers). CyberGym 86.2% (frontier-level autonomous vulnerability discovery, surpasses both 3.5 Flash Cyber and significantly larger frontier models). CWE-Bench 47.2% pass@1 (on Pareto frontier for automated patching). Internal benchmark >70% success rate across 20 programming languages. Chrome Security team: 2.6x more correct patches than best commercial models. Wiz: +7.5-9.7% higher recall at 2.3-5.2x lower cost. Found a critical foundational vulnerability in <2 hours (normally months). Gray Swan IPI 6.0% (low attack success = strong prompt injection robustness). 1M context / 65K out. Text + code in/out.
- **Provider / access:** Restricted Fairwind Program only (Google DeepMind). Not publicly available. No public API pricing. Application required for access.
- **Release / knowledge:** Released September 2, 2026. Based on Gemini 3.8 Flash foundation. Knowledge cutoff not precisely documented.
- **IDs:** `google/gemini-3-8-flash-cyber`; available only via Fairwind Program.
- **Context window:** 1,048,576 tokens (1M); 65,536 output tokens (65K out). Same as parent Gemini 3.8 Flash.
- **Modalities:** Text, code in; text, code out. Specialized for cybersecurity code analysis — not a general-purpose multimodal model despite sharing the 3.8 Flash foundation.
- **Pricing (as of 2026-10-10):** No public pricing. Restricted Fairwind Program access only. Parent model (Gemini 3.8 Flash) costs $0.75/$3.75 per 1M (introductory through Dec 2026). Cyber variant likely similar or higher given restricted access.

### Raw benchmarks found

Agent / tool use:

- CyberGym: **86.2%** (Google — frontier-level autonomous vulnerability discovery)
- Internal vulnerability discovery (20 languages): **>70%** success rate (Google — impressive real-world coverage)

Coding:

- CWE-Bench: **47.2%** pass@1 (Google/Collinear — on Pareto frontier for automated patching; leading frontier model at 47.8%)

Safety / robustness:

- Gray Swan IPI (15 attempts): **6.0%** attack success rate (Google — strong prompt injection robustness; lower is better)

Real-world impact (Google internal):

- Chrome Security: **2.6x** more correct vulnerability patches than best commercial models
- Wiz penetration testing: **+7.5-9.7%** higher recall at **2.3-5.2x** lower cost
- Google Cloud Vulnerability Research: found critical foundational vulnerability in **<2 hours** (normally months)

### Normalized scores (1–100)

- **Tool use: 72/100.** CyberGym 86.2% is frontier-level autonomous vulnerability discovery. Internal benchmark >70% across 20 languages is impressive. The model excels at cybersecurity tool use (vulnerability scanning, detection, patching) but has no general-purpose agentic benchmarks. Scored on cybersecurity-specific tool use only.
- **Reasoning: 45/100.** No standard reasoning benchmarks reported (the model is a cybersecurity fine-tune). Shares foundation with Gemini 3.8 Flash (AA Intelligence Index 59, HLE-Verified 54.9%). However, the Cyber fine-tune prioritizes vulnerability analysis over general reasoning. Gray Swan IPI 6.0% (low attack success) indicates strong robustness. Scored conservatively due to lack of standard reasoning data.
- **Context window: 78/100.** 1M context (1,048,576 tokens) with 65K output. Same as parent Gemini 3.8 Flash. The 1M context is class-leading and particularly valuable for cybersecurity tasks involving large codebase analysis. 65K output is moderate.
- **Multimodal: 25/100.** Text + code in/out only. Despite sharing the Gemini 3.8 Flash foundation (which supports text + image + video + audio + PDF), the Cyber variant is specialized for code analysis. No multimodal benchmarks reported. The model is essentially text/code-only for cybersecurity tasks.
- **Coding: 68/100.** CWE-Bench 47.2% pass@1 is on the Pareto frontier for automated vulnerability patching (near leading model at 47.8%). Chrome 2.6x more correct patches is exceptional for real-world vulnerability fixing. CyberGym 86.2% demonstrates exceptional code-level vulnerability detection. Internal >70% across 20 languages is strong. The coding profile is exceptional for cybersecurity-specific coding (vulnerability detection/patching) but has no general-purpose coding benchmarks.
- **Cost efficiency: 15/100.** No public pricing. Restricted Fairwind Program — most users cannot access this model at all. Application required, limited to trusted defenders (government, critical infrastructure, software maintainers). Even if pricing is competitive with parent ($0.75/$3.75 per 1M), the restricted access severely limits practical cost efficiency for most users.
- **Overall Score: 57.6/100.** Mean of five quality dims: (72 + 45 + 78 + 25 + 68) / 5 = 57.6. Gemini 3.8 Flash Cyber is Google DeepMind's cybersecurity-specialized model, available only through the Fairwind Program. Key strengths: CyberGym 86.2% (frontier-level autonomous vulnerability discovery), CWE-Bench 47.2% (Pareto frontier for patching), Chrome 2.6x more correct patches, Wiz +7.5-9.7% higher recall at 2.3-5.2x lower cost, found critical vulnerability in <2 hours, internal >70% success across 20 languages, Gray Swan IPI 6.0% (strong prompt injection robustness), 1M context window, based on Gemini 3.8 Flash foundation (AA Intelligence Index 59 for parent). Key weaknesses: restricted Fairwind Program access only (not publicly available), no general-purpose benchmarks, text/code only (no multimodal), no public pricing, no standard reasoning/coding benchmarks, specialized narrow focus. Best fit for: cybersecurity vulnerability detection (CyberGym 86.2%), automated vulnerability patching (CWE-Bench 47.2%), large codebase security analysis (1M context), multilingual vulnerability discovery (20+ languages), trusted defenders in government/critical infrastructure. Not ideal for: general-purpose tasks (cybersecurity-only fine-tune), multimodal applications (text/code only), users without Fairwind Program access, cost-sensitive deployments (restricted pricing), non-cybersecurity coding tasks.

---

## Signature

- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-10
- Method: public internet research across Google Blog, BenchLM, Miraflow, Artificial Analysis, ValueAddVC, Fairwind Program page, and other benchmark sources; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus.md`, using the same headings.
