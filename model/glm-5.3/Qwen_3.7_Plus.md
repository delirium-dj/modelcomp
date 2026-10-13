# GLM 5.3 — findings by Qwen 3.7 Plus
- Source: Z.ai/GLM 5.3 (`opencode/glm-5.3`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3
- **Short description:** Z.ai's August 2026 flagship open-weights reasoning MoE (743B total / 40B active) focused on agentic coding and cybersecurity defense. Leads AutomationBench (48.2%), GDPVal-AA v2 (1769 Elo), and CyberGym (84.5%). Achieves 66.9% on DeepSWE, 62.5% on HLE w/ Tools, 28.3% on Terminal Bench 3.0, and 54.4% on ExploitBench. AA Intelligence Index 60 (ties Kimi K3). 1M context window. Text-only. "Scaling post-training is all we did" — same base as GLM-5.2 with substantially extended post-training. Open weights released Aug 28 after safety review.
- **Provider / access:** Z.ai (GLM Coding Plan, ZCode, API). Open weights (staged release).
- **Release / knowledge:** August 14, 2026. Knowledge cutoff not specified.
- **IDs:** `opencode/glm-5.3`
- **Context window:** 1,000,000 tokens (1M)
- **Modalities:** Text in; text out (reasoning). Text-only.
- **Pricing:** $1.40 in / $4.40 out per 1M; $0.26 cached read

### Raw benchmarks found

Agent / tool use: AutomationBench 48.2% · GDPVal-AA v2 1769 Elo · CyberGym 84.5% · Terminal Bench 3.0 28.3% · Agents' Last Exam (CLI) 28.5% · ExploitGym 105/130 (2hr) / 130 (6hr).

Reasoning / knowledge: HLE w/ Tools 62.5% · AA Intelligence Index 60 (ties Kimi K3).

Coding: DeepSWE 66.9% · Terminal Bench 3.0 28.3% · ExploitBench 54.4%. vs GLM-5.2 (4.6%/46.2%/24.4%), Kimi K3 (17.4%/67.5%/32.2%), Fable 5 (33.7%/69.7%/78.0%), GPT-5.6 Sol (34.6%/72.7%/76.5%).

Multimodal: Text-only. No multimodal capabilities or benchmarks.

Long context: 1M native context window.

### Normalized scores (1–100)

- **Tool use: 62/100.** AutomationBench 48.2% and GDPVal-AA v2 1769 Elo are best-in-class. CyberGym 84.5% is outstanding. Terminal Bench 3.0 28.3% is modest. Agents' Last Exam 28.5% is moderate. Strong agentic coding and defensive cybersecurity focus.
- **Reasoning: 55/100.** HLE w/ Tools 62.5% is strong. AA Intelligence Index 60 (ties Kimi K3) is average. Agents' Last Exam 28.5% is moderate. No standard reasoning benchmarks (GPQA, MMLU-Pro, AIME) reported.
- **Context window: 75/100.** 1M context is good but not best-in-class (2M models exist).
- **Multimodal: 15/100.** Text-only. No multimodal capabilities. Significant limitation compared to multimodal models.
- **Coding: 58/100.** DeepSWE 66.9% is strong. Terminal Bench 3.0 28.3% is modest. ExploitBench 54.4% is moderate (vs Fable 5 78.0%, GPT-5.6 Sol 76.5%). CyberGym 84.5% is outstanding for defensive security. Coding profile is narrow — strong on automation/defense, weaker on offense/general terminal.
- **Cost efficiency: 65/100.** $1.40/$4.40 per 1M is moderate. Open weights available for self-hosting. Coding Plan tiers ($12.6-$117.6/mo).
- **Overall Score: 53/100.** Mean of Tool (62) + Reasoning (55) + Context (75) + Multimodal (15) + Coding (58) = 265/5 = 53.0. Leading AutomationBench, GDPVal-AA, and CyberGym scores are notable, but text-only limitation, modest Terminal Bench, and narrow coding profile (strong defense, weak offense) limit the score.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
